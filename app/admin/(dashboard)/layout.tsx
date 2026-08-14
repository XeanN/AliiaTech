import { redirect } from "next/navigation";
import Link from "next/link";
import { verifySession } from "@/lib/auth/session";
import { logout } from "@/app/actions/auth";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await verifySession();
  if (!session) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-dark-bg text-text-light">
      <header className="border-b border-gray-700">
        <div className="container mx-auto px-6 py-4 flex flex-wrap gap-y-3 justify-between items-center">
          <nav className="flex flex-wrap gap-6 text-sm font-medium">
            <Link href="/admin" className="hover:text-accent-start transition">Leads</Link>
            <Link href="/admin/servicios" className="hover:text-accent-start transition">Servicios</Link>
            <Link href="/admin/blog" className="hover:text-accent-start transition">Blog</Link>
            <Link href="/admin/cambiar-password" className="hover:text-accent-start transition">Cambiar contraseña</Link>
          </nav>
          <form action={logout}>
            <button type="submit" className="text-sm text-text-muted hover:text-white transition">
              Cerrar sesión ({session.email})
            </button>
          </form>
        </div>
      </header>
      <main className="container mx-auto px-6 py-10">{children}</main>
    </div>
  );
}
