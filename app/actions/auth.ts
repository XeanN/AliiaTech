"use server";

import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { db } from "@/lib/db/client";
import { adminCredentials } from "@/lib/db/schema";
import { createSession, deleteSession, verifySession } from "@/lib/auth/session";

export type LoginState = { error?: string } | undefined;

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  const rows = await db.select().from(adminCredentials).where(eq(adminCredentials.email, email));
  const credential = rows[0];

  if (!credential) {
    return { error: "Credenciales inválidas." };
  }

  const valid = await bcrypt.compare(password, credential.passwordHash);
  if (!valid) {
    return { error: "Credenciales inválidas." };
  }

  await createSession(email);
  redirect("/admin");
}

export async function logout() {
  await deleteSession();
  redirect("/admin/login");
}

export type ChangePasswordState = { error?: string; success?: boolean } | undefined;

export async function changePassword(
  _prevState: ChangePasswordState,
  formData: FormData
): Promise<ChangePasswordState> {
  const session = await verifySession();
  if (!session) redirect("/admin/login");

  const currentPassword = String(formData.get("currentPassword") || "");
  const newPassword = String(formData.get("newPassword") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");

  if (newPassword.length < 8) {
    return { error: "La nueva contraseña debe tener al menos 8 caracteres." };
  }
  if (newPassword !== confirmPassword) {
    return { error: "La confirmación no coincide con la nueva contraseña." };
  }

  const rows = await db.select().from(adminCredentials).where(eq(adminCredentials.email, session.email));
  const credential = rows[0];
  if (!credential) {
    return { error: "No se encontró la cuenta." };
  }

  const valid = await bcrypt.compare(currentPassword, credential.passwordHash);
  if (!valid) {
    return { error: "La contraseña actual es incorrecta." };
  }

  const newHash = await bcrypt.hash(newPassword, 10);
  await db
    .update(adminCredentials)
    .set({ passwordHash: newHash, updatedAt: new Date() })
    .where(eq(adminCredentials.email, session.email));

  return { success: true };
}
