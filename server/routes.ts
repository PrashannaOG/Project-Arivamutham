import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.post("/api/register", async (req, res) => {
    try {
      const data = insertRegistrationSchema.parse(req.body);
      const registration = await storage.createRegistration(data);

      // Send notifications asynchronously (don't block response)
      sendEmailNotification(registration.email, registration.name);
      sendAdminEmailNotification(registration);

      res.status(201).json(registration);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid input", errors: error.errors });
        return;
      }
      console.error("Registration error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // DEBUG ENDPOINT: Test email functionality directly
  app.get("/api/test-email", async (_req, res) => {
    try {
      console.log("Triggering manual test email...");
      await sendAdminEmailNotification({
        name: "TEST USER",
        email: "test@example.com",
        phone: "1234567890",
        city: "Test City"
      });
      res.json({ message: "Test email executed. Check your inbox! If empty, check server logs." });
    } catch (error: any) {
      console.error("Test email failed:", error);
      res.status(500).json({
        message: "Email Failed",
        error: error.message,
        stack: error.stack
      });
    }
  });

  return httpServer;
}

import { insertRegistrationSchema } from "@shared/schema";
import { ZodError } from "zod";
import { sendEmailNotification, sendAdminEmailNotification } from "./services/notification";
