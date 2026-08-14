import { cache } from "react";
import { eq } from "drizzle-orm";
import { db } from "./db/client";
import { services, blogPosts } from "./db/schema";

export const getAllServices = cache(async () => {
  return db.select().from(services).orderBy(services.id);
});

export const getServiceBySlug = cache(async (slug: string) => {
  const rows = await db.select().from(services).where(eq(services.slug, slug));
  return rows[0] ?? null;
});

export const getAllBlogPosts = cache(async () => {
  return db.select().from(blogPosts).orderBy(blogPosts.id);
});

export const getBlogPostBySlug = cache(async (slug: string) => {
  const rows = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
  return rows[0] ?? null;
});
