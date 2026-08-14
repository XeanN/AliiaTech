import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { getAllServices } from "@/lib/data";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contáctanos",
  description: "Estamos aquí para ayudarte a transformar tu negocio con tecnología. Agenda una consultoría con Aliia Tech.",
};

function PhoneIcon() {
  return (
    <svg className="w-6 h-6 text-accent-start" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg className="w-6 h-6 text-accent-start" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg className="w-6 h-6 text-accent-start" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default async function Contact() {
  const services = await getAllServices();

  return (
    <>
      <PageHeader
        title="Contáctanos"
        subtitle="Estamos aquí para ayudarte a transformar tu negocio con tecnología."
        imageUrl="/Hero_Contacto.jpg"
      />

      <section className="content-card" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Suspense fallback={<div className="bg-dark-card p-8 rounded-xl border border-gray-700 h-96" />}>
              <ContactForm services={services} />
            </Suspense>

            <div className="pt-8">
              <h2 className="text-3xl font-bold text-white mb-6">Información de Contacto</h2>
              <p className="text-lg text-text-muted mb-8">
                También puedes contactarnos directamente por estos medios. Estaremos encantados de atenderte.
              </p>

              <div className="space-y-6">
                <a href={`https://wa.me/${siteConfig.phone.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="flex items-start hover:bg-gray-800/50 p-4 rounded-lg transition group">
                  <div className="flex-shrink-0 bg-dark-card text-accent-start p-3 rounded-full group-hover:scale-110 transition">
                    <PhoneIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Teléfono / WhatsApp</h3>
                    <p className="text-text-muted group-hover:text-accent-start transition">{siteConfig.phoneDisplay}</p>
                  </div>
                </a>

                <a href={`mailto:${siteConfig.email}`} className="flex items-start hover:bg-gray-800/50 p-4 rounded-lg transition group">
                  <div className="flex-shrink-0 bg-dark-card text-accent-start p-3 rounded-full group-hover:scale-110 transition">
                    <MailIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Correo Electrónico</h3>
                    <p className="text-text-muted group-hover:text-accent-start transition">{siteConfig.email}</p>
                  </div>
                </a>

                <div className="flex items-start p-4">
                  <div className="flex-shrink-0 bg-dark-card text-accent-start p-3 rounded-full">
                    <LocationIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Ubicación</h3>
                    <p className="text-text-muted">Lima, Perú</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Horario de Atención</h3>
                <p className="text-text-muted">
                  Lunes a Viernes: 9:00 AM - 6:00 PM
                  <br />
                  Sábados: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
