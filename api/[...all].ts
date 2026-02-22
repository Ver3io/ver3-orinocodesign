import { getApp } from "../server/app.js";

export default async function handler(req: any, res: any) {
  const { app } = await getApp({
    serveClientInProduction: false,
    setupViteInDevelopment: false,
  });
  return app(req, res);
}
