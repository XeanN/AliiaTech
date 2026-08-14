"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/auth/session";

export type LoginState = { error?: string } | undefined;

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  const adminEmail = process.env.ADMIN_EMAIL!;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH!;

  if (email !== adminEmail) {
    return { error: "Credenciales inválidas." };
  }

  const valid = await bcrypt.compare(password, adminPasswordHash);
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
