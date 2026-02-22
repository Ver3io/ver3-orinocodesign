import { getApp, log } from "./app.js";

(async () => {
  const { httpServer } = await getApp({
    serveClientInProduction: true,
    setupViteInDevelopment: true,
  });

  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
