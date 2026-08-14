import Link from "next/link";
import { getAllServices } from "@/lib/data";

export default async function AdminServicesList() {
  const allServices = await getAllServices();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Servicios ({allServices.length})</h1>
        <Link href="/admin/servicios/nuevo" className="bg-accent-start text-dark-bg font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition">
          + Nuevo servicio
        </Link>
      </div>
      <div className="space-y-2">
        {allServices.map((service) => (
          <Link
            key={service.slug}
            href={`/admin/servicios/${service.slug}`}
            className="block bg-dark-card p-4 rounded-lg border border-gray-700 hover:border-accent-start transition"
          >
            <p className="text-white font-semibold">{service.title}</p>
            <p className="text-text-muted text-sm">{service.pillar} · /servicios/{service.slug}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
