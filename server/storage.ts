import { type User, type InsertUser, type Contact, type InsertContact, type SiteContent, type InsertContent, users, contacts, siteContent } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;

  // Site content methods
  getContent(section: string): Promise<SiteContent | undefined>;
  updateContent(section: string, content: string): Promise<SiteContent>;
  getAllContent(): Promise<SiteContent[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db.insert(contacts).values(insertContact).returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  async getContent(section: string): Promise<SiteContent | undefined> {
    const [content] = await db.select().from(siteContent).where(eq(siteContent.section, section));
    return content;
  }

  async updateContent(section: string, content: string): Promise<SiteContent> {
    const [existing] = await db.select().from(siteContent).where(eq(siteContent.section, section));

    if (existing) {
      const [updated] = await db
        .update(siteContent)
        .set({ content })
        .where(eq(siteContent.section, section))
        .returning();
      return updated;
    }

    const [newContent] = await db.insert(siteContent).values({ section, content }).returning();
    return newContent;
  }

  async getAllContent(): Promise<SiteContent[]> {
    return await db.select().from(siteContent);
  }
}

export const storage = new DatabaseStorage();
