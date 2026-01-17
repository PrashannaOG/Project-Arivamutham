import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { sendContactNotification } from "./mail";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);

      // Send email notification (don't await to avoid delaying response)
      sendContactNotification(contact).catch(err => console.error("Email notification failed", err));

      res.status(201).json(contact);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: error.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.get("/api/content/:section", async (req, res) => {
    const section = req.params.section;
    const content = await storage.getContent(section);
    if (!content) {
      return res.status(404).json({ message: "Content not found" });
    }
    res.json(content);
  });

  const httpServer = createServer(app);

  return httpServer;
}
