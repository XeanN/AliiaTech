"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db/client";
import { blogPosts } from "@/lib/db/schema";
import { verifySession } from "@/lib/auth/session";

function revalidateBlogPages(slug?: string) {
  revalidatePath("/blog");
  revalidatePath("/sitemap.xml");
  if (slug) revalidatePath(`/blog/${slug}`);
}

export async function saveBlogPost(formData: FormData) {
  const session = await verifySession();
  if (!session) redirect("/admin/login");

  const originalSlug = String(formData.get("originalSlug") || "");
  const values = {
    slug: String(formData.get("slug") || "").trim(),
    title: String(formData.get("title") || ""),
    shortDescription: String(formData.get("shortDescription") || ""),
    imageUrl: String(formData.get("imageUrl") || ""),
    author: String(formData.get("author") || ""),
    date: String(formData.get("date") || ""),
    contentMarkdown: String(formData.get("contentMarkdown") || ""),
    updatedAt: new Date(),
  };

  if (originalSlug) {
    await db.update(blogPosts).set(values).where(eq(blogPosts.slug, originalSlug));
  } else {
    await db.insert(blogPosts).values(values);
  }

  revalidateBlogPages(originalSlug || values.slug);
  if (originalSlug && originalSlug !== values.slug) revalidateBlogPages(values.slug);
  redirect("/admin/blog");
}

export async function deleteBlogPost(formData: FormData) {
  const session = await verifySession();
  if (!session) redirect("/admin/login");

  const slug = String(formData.get("slug") || "");
  await db.delete(blogPosts).where(eq(blogPosts.slug, slug));
  revalidateBlogPages(slug);
  redirect("/admin/blog");
}
