import { db } from "./db.js";
import {
  products,
  messages,
  type InsertProduct,
  type InsertMessage,
  type Product,
  type Message
} from "../shared/schema.js";
import { eq, sql } from "drizzle-orm";

export interface IStorage {
  ensureSchema(): Promise<void>;
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createMessage(message: InsertMessage): Promise<Message>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class DatabaseStorage implements IStorage {
  private schemaEnsured = false;

  async ensureSchema(): Promise<void> {
    if (this.schemaEnsured) {
      return;
    }

    await db.execute(sql`
      create schema if not exists orinocodesign
    `);

    await db.execute(sql`
      create table if not exists orinocodesign.products (
        id serial primary key,
        name text not null,
        category text not null,
        description text not null,
        image_url text not null
      )
    `);

    await db.execute(sql`
      create table if not exists orinocodesign.messages (
        id serial primary key,
        name text not null,
        email text not null,
        message text not null,
        created_at text default CURRENT_TIMESTAMP
      )
    `);

    this.schemaEnsured = true;
  }

  async getProducts(): Promise<Product[]> {
    await this.ensureSchema();
    return await db.select().from(products);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    await this.ensureSchema();
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    await this.ensureSchema();
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    await this.ensureSchema();
    const [product] = await db.insert(products).values(insertProduct).returning();
    return product;
  }
}

export const storage = new DatabaseStorage();
