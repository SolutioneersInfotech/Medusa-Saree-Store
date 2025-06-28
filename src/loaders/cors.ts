// src/loaders/cors.ts
import cors from "cors";
import { MedusaContainer } from "@medusajs/types";
import { Express } from "express";

export default async function ({ container }: { container: MedusaContainer }) {
  const app = container.resolve<Express>("express");

  app.use(
    cors({
      origin: ["http://localhost:3001"],
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );
}
