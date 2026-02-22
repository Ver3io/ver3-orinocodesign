import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage.js";
import { api } from "../shared/routes.js";
import { z } from "zod";
import { insertMessageSchema } from "../shared/schema.js";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.products.list.path, async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get(api.products.get.path, async (req, res) => {
    const product = await storage.getProduct(Number(req.params.id));
    if (!product) {
      return res.status(404).json({ message: "Marca no encontrada" });
    }
    res.json(product);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}

// Seed data function
export async function seedDatabase() {
  const existingProducts = await storage.getProducts();
  if (existingProducts.length === 0) {
    const brands = [
      { name: "3M", desc: "Soluciones industriales y de seguridad.", cat: "Industrial" },
      { name: "SKF", desc: "Rodamientos y soluciones de mantenimiento.", cat: "Mecánico" },
      { name: "NSK", desc: "Rodamientos y tecnología de movimiento lineal.", cat: "Mecánico" },
      { name: "Stanley", desc: "Herramientas manuales y de medición.", cat: "Herramientas" },
      { name: "Caterpillar", desc: "Repuestos y componentes para maquinaria pesada.", cat: "Maquinaria" },
      { name: "OEM", desc: "Repuestos originales de fábrica.", cat: "Industrial" },
      { name: "Dewalt", desc: "Herramientas eléctricas y accesorios.", cat: "Herramientas" },
      { name: "Makita", desc: "Herramientas eléctricas e industriales.", cat: "Herramientas" },
      { name: "Truper", desc: "Herramientas y equipos de trabajo.", cat: "Herramientas" },
      { name: "Siemens", desc: "Automatización y equipos eléctricos.", cat: "Eléctrico" },
      { name: "GE", desc: "Equipos eléctricos e industriales.", cat: "Eléctrico" },
      { name: "Honeywell", desc: "Automatización y control industrial.", cat: "Industrial" },
      { name: "Bosch", desc: "Herramientas eléctricas y tecnología industrial.", cat: "Herramientas" },
      { name: "Timken", desc: "Rodamientos y componentes mecánicos.", cat: "Mecánico" },
      { name: "Kobold Instruments", desc: "Instrumentación industrial. Orinoco Supply LLC es representante de Kobold Instruments.", cat: "Instrumentación" },
    ];

    for (const item of brands) {
      await storage.createProduct({
        name: item.name,
        category: item.cat,
        description: item.desc,
        imageUrl: `https://placehold.co/600x400/1a2744/ffffff?text=${encodeURIComponent(item.name)}`,
      });
    }
    console.log("Base de datos sembrada con marcas iniciales.");
  }
}
