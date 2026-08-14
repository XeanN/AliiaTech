import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getAllServices } from "@/lib/data";
import { PillarIcon, PILLAR_NAMES, type IconKey } from "@/lib/icons";
import type { Service } from "@/lib/db/schema";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Soluciones integrales para cada área de tu Transformación Digital: desarrollo web, sistemas ERP, IA, ciberseguridad y marketing.",
};

function PillarSection({ id, iconKey, services }: { id: string; iconKey: IconKey; services: Service[] }) {
  if (services.length === 0) return null;
  return (
    <div id={`pilar-${id}`} className="mb-16 scroll-mt-32" data-aos="fade-up">
      <div className="bg-dark-card rounded-2xl p-8 border border-gray-700 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-start to-accent-end" />
        <div className="flex items-center mb-8">
          <div className="p-3 bg-gray-900 rounded-full mr-4 border border-gray-700">
            <PillarIcon iconKey={iconKey} />
          </div>
          <h2 className="text-3xl font-bold text-white">{PILLAR_NAMES[iconKey]}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="block bg-gray-900 p-6 rounded-xl shadow-lg hover:border-accent-start border border-gray-700 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-text-muted text-sm">{service.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function ServicesPage() {
  const allServices = await getAllServices();
  const byIcon = (key: IconKey) => allServices.filter((s) => s.iconKey === key);

  return (
    <>
      <PageHeader
        title="Nuestros Pilares de Servicio"
        subtitle="Soluciones integrales para cada área de tu Transformación Digital."
        imageUrl="/Hero-Servicios.jpg"
      />
      <section className="content-card">
        <div className="container mx-auto px-6">
          <PillarSection id="web" iconKey="web" services={byIcon("web")} />
          <PillarSection id="sistemas" iconKey="sistemas" services={byIcon("sistemas")} />
          <PillarSection id="marketing" iconKey="marketing" services={byIcon("marketing")} />
          <PillarSection id="industrias" iconKey="industria" services={byIcon("industria")} />
        </div>
      </section>
    </>
  );
}
