"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db/client";
import { services } from "@/lib/db/schema";
import { verifySession } from "@/lib/auth/session";

function linesToArray(value: FormDataEntryValue | null) {
  return String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function parseProcess(value: FormDataEntryValue | null) {
  return linesToArray(value).map((line) => {
    const [title, ...rest] = line.split("|");
    return { title: title.trim(), description: rest.join("|").trim() };
  });
}

function revalidateServicePages(slug?: string) {
  revalidatePath("/servicios");
  revalidatePath("/sitemap.xml");
  if (slug) revalidatePath(`/servicios/${slug}`);
}

export async function saveService(formData: FormData) {
  const session = await verifySession();
  if (!session) redirect("/admin/login");

  const originalSlug = String(formData.get("originalSlug") || "");
  const values = {
    slug: String(formData.get("slug") || "").trim(),
    pillar: String(formData.get("pillar") || ""),
    iconKey: String(formData.get("iconKey") || "web"),
    title: String(formData.get("title") || ""),
    shortDescription: String(formData.get("shortDescription") || ""),
    imageUrl: String(formData.get("imageUrl") || ""),
    heroTitle: String(formData.get("heroTitle") || ""),
    problem: String(formData.get("problem") || ""),
    solution: String(formData.get("solution") || ""),
    features: linesToArray(formData.get("features")),
    process: parseProcess(formData.get("process")),
    tech: linesToArray(formData.get("tech")),
    socialProof: {
      quote: String(formData.get("quote") || ""),
      author: String(formData.get("author") || ""),
      company: String(formData.get("company") || ""),
    },
    cta: String(formData.get("cta") || ""),
    updatedAt: new Date(),
  };

  if (originalSlug) {
    await db.update(services).set(values).where(eq(services.slug, originalSlug));
  } else {
    await db.insert(services).values(values);
  }

  revalidateServicePages(originalSlug || values.slug);
  if (originalSlug && originalSlug !== values.slug) revalidateServicePages(values.slug);
  redirect("/admin/servicios");
}

export async function deleteService(formData: FormData) {
  const session = await verifySession();
  if (!session) redirect("/admin/login");

  const slug = String(formData.get("slug") || "");
  await db.delete(services).where(eq(services.slug, slug));
  revalidateServicePages(slug);
  redirect("/admin/servicios");
}
