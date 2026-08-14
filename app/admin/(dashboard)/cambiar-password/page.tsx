"use client";

import { useActionState } from "react";
import { changePassword } from "@/app/actions/auth";

const inputClass =
  "mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-start";
const labelClass = "block text-sm font-medium text-text-muted";

export default function ChangePasswordPage() {
  const [state, formAction, pending] = useActionState(changePassword, undefined);

  return (
    <div className="max-w-sm">
      <h1 className="text-2xl font-bold text-white mb-6">Cambiar contraseña</h1>

      <form action={formAction} className="space-y-6">
        {state?.error && (
          <div className="p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm">{state.error}</div>
        )}
        {state?.success && (
          <div className="p-3 bg-green-900/30 border border-green-700 rounded-lg text-green-400 text-sm">
            Contraseña actualizada correctamente.
          </div>
        )}

        <div>
          <label className={labelClass}>Contraseña actual</label>
          <input type="password" name="currentPassword" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Nueva contraseña (mínimo 8 caracteres)</label>
          <input type="password" name="newPassword" required minLength={8} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Confirmar nueva contraseña</label>
          <input type="password" name="confirmPassword" required minLength={8} className={inputClass} />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition disabled:opacity-50"
        >
          {pending ? "Guardando..." : "Guardar nueva contraseña"}
        </button>
      </form>
    </div>
  );
}
