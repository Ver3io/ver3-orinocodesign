import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { registerRoutes, seedDatabase } from "./routes.js";
import { serveStatic } from "./static.js";
import { storage } from "./storage.js";

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

type AppOptions = {
  serveClientInProduction: boolean;
  setupViteInDevelopment: boolean;
};

type AppBundle = {
  app: express.Express;
  httpServer: ReturnType<typeof createServer>;
};

const DEFAULT_OPTIONS: AppOptions = {
  serveClientInProduction: true,
  setupViteInDevelopment: true,
};

let appPromise: Promise<AppBundle> | null = null;

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function getApp(
  options: Partial<AppOptions> = {},
): Promise<AppBundle> {
  if (appPromise) {
    return appPromise;
  }

  const merged: AppOptions = { ...DEFAULT_OPTIONS, ...options };

  appPromise = (async () => {
    const app = express();
    const httpServer = createServer(app);

    app.use(
      express.json({
        verify: (req, _res, buf) => {
          req.rawBody = buf;
        },
      }),
    );

    app.use(express.urlencoded({ extended: false }));

    app.use((req, res, next) => {
      const start = Date.now();
      const path = req.path;
      let capturedJsonResponse: Record<string, any> | undefined = undefined;

      const originalResJson = res.json;
      res.json = function (bodyJson, ...args) {
        capturedJsonResponse = bodyJson;
        return originalResJson.apply(res, [bodyJson, ...args]);
      };

      res.on("finish", () => {
        const duration = Date.now() - start;
        if (path.startsWith("/api")) {
          let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
          if (capturedJsonResponse) {
            logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
          }

          log(logLine);
        }
      });

      next();
    });

    await storage.ensureSchema();
    await registerRoutes(httpServer, app);
    await seedDatabase().catch(console.error);

    app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      console.error("Internal Server Error:", err);

      if (res.headersSent) {
        return next(err);
      }

      return res.status(status).json({ message });
    });

    if (process.env.NODE_ENV === "production") {
      if (merged.serveClientInProduction) {
        serveStatic(app);
      }
    } else if (merged.setupViteInDevelopment) {
      const { setupVite } = await import("./vite");
      await setupVite(httpServer, app);
    }

    return { app, httpServer };
  })();

  return appPromise;
}
