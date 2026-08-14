import {
  pgTable,
  serial,
  text,
  varchar,
  jsonb,
  timestamp,
} from "drizzle-orm/pg-core";

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  pillar: varchar("pillar", { length: 255 }).notNull(),
  iconKey: varchar("icon_key", { length: 50 }).notNull(),
  title: text("title").notNull(),
  shortDescription: text("short_description").notNull(),
  imageUrl: text("image_url").notNull(),
  heroTitle: text("hero_title").notNull(),
  problem: text("problem").notNull(),
  solution: text("solution").notNull(),
  features: jsonb("features").$type<string[]>().notNull(),
  process: jsonb("process")
    .$type<{ title: string; description: string }[]>()
    .notNull(),
  tech: jsonb("tech").$type<string[]>().notNull(),
  socialProof: jsonb("social_proof")
    .$type<{ quote: string; author: string; company: string }>()
    .notNull(),
  cta: text("cta").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: text("title").notNull(),
  shortDescription: text("short_description").notNull(),
  imageUrl: text("image_url").notNull(),
  author: varchar("author", { length: 255 }).notNull(),
  date: varchar("date", { length: 100 }).notNull(),
  contentMarkdown: text("content_markdown").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }),
  serviceSlug: varchar("service_slug", { length: 255 }),
  message: text("message").notNull(),
  status: varchar("status", { length: 50 }).default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Service = typeof services.$inferSelect;
export type NewService = typeof services.$inferInsert;
export type BlogPost = typeof blogPosts.$inferSelect;
export type NewBlogPost = typeof blogPosts.$inferInsert;
export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
