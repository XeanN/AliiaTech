"use server";

import { db } from "@/lib/db/client";
import { leads } from "@/lib/db/schema";

export async function createLead(data: {
  name: string;
  email: string;
  company?: string;
  serviceSlug?: string;
  message: string;
}) {
  try {
    await db.insert(leads).values({
      name: data.name,
      email: data.email,
      company: data.company || null,
      serviceSlug: data.serviceSlug || null,
      message: data.message,
    });
    return { ok: true };
  } catch (error) {
    // Respaldo silencioso: si falla, no debe romper el flujo principal de EmailJS/WhatsApp.
    console.error("No se pudo guardar el lead en la base de datos:", error);
    return { ok: false };
  }
}
