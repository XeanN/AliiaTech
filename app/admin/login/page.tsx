"use client";

import { useActionState } from "react";
import { login } from "@/app/actions/auth";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg px-6">
      <form action={formAction} className="w-full max-w-sm bg-dark-card p-8 rounded-xl border border-gray-700 space-y-6">
        <h1 className="text-2xl font-bold text-white text-center">Panel Admin — Aliia Tech</h1>

        {state?.error && (
          <div className="p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm">{state.error}</div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-muted">Email</label>
          <input
            type="email" name="email" id="email" required
            className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-start"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-text-muted">Contraseña</label>
          <input
            type="password" name="password" id="password" required
            className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-start"
          />
        </div>

        <button
          type="submit" disabled={pending}
          className="w-full bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition disabled:opacity-50"
        >
          {pending ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}
