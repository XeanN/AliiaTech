import { db } from "@/lib/db/client";
import { leads } from "@/lib/db/schema";
import { desc } from "drizzle-orm";

export default async function AdminDashboard() {
  const recentLeads = await db.select().from(leads).orderBy(desc(leads.createdAt)).limit(50);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Leads recientes</h1>
      {recentLeads.length === 0 ? (
        <p className="text-text-muted">Todavía no hay leads registrados.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700 text-text-muted text-sm">
                <th className="py-3 pr-4">Fecha</th>
                <th className="py-3 pr-4">Nombre</th>
                <th className="py-3 pr-4">Email</th>
                <th className="py-3 pr-4">Empresa</th>
                <th className="py-3 pr-4">Servicio</th>
                <th className="py-3 pr-4">Mensaje</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-800 text-sm align-top">
                  <td className="py-3 pr-4 whitespace-nowrap text-text-muted">
                    {lead.createdAt.toLocaleDateString("es-PE")}
                  </td>
                  <td className="py-3 pr-4">{lead.name}</td>
                  <td className="py-3 pr-4">{lead.email}</td>
                  <td className="py-3 pr-4">{lead.company || "—"}</td>
                  <td className="py-3 pr-4">{lead.serviceSlug || "—"}</td>
                  <td className="py-3 pr-4 max-w-xs">{lead.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
