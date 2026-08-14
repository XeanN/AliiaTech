"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import { createLead } from "@/app/actions/leads";
import { whatsappUrl } from "@/lib/siteConfig";
import type { Service } from "@/lib/db/schema";

function ChevronDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-text-muted">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function ContactForm({ services }: { services: Service[] }) {
  const [formData, setFormData] = useState({ from_name: "", from_email: "", company: "", service: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"success" | "error" | null>(null);

  const searchParams = useSearchParams();
  const selectRef = useRef<HTMLSelectElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  useEffect(() => {
    const serviceSlug = searchParams.get("servicio");
    if (serviceSlug && selectRef.current) {
      selectRef.current.value = serviceSlug;
      setFormData((prev) => ({ ...prev, service: serviceSlug }));
    }

    if (window.location.hash === "#formulario") {
      const element = document.getElementById("formulario");
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      setSendStatus("error");
      return;
    }

    setIsSending(true);
    setSendStatus(null);

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, EMAILJS_PUBLIC_KEY);

      createLead({
        name: formData.from_name,
        email: formData.from_email,
        company: formData.company,
        serviceSlug: formData.service,
        message: formData.message,
      });

      const serviceText = formData.service
        ? services.find((s) => s.slug === formData.service)?.title || formData.service
        : "Consulta General";

      const whatsappMessage = `
🙋‍♂️ *Nombre:* ${formData.from_name}
📧 *Email:* ${formData.from_email}
🏢 *Empresa:* ${formData.company || "No especificado"}
💼 *Servicio de interés:* ${serviceText}

📝 *Mensaje:*
${formData.message}
      `.trim();

      setSendStatus("success");
      setTimeout(() => window.open(whatsappUrl(whatsappMessage), "_blank"), 1000);

      setFormData({ from_name: "", from_email: "", company: "", service: "", message: "" });
      formRef.current?.reset();
    } catch (error) {
      console.error("Error al enviar:", error);
      setSendStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="formulario" className="bg-dark-card p-8 rounded-xl shadow-lg border border-gray-700 scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-6">Envíanos un mensaje</h2>

      {sendStatus === "success" && (
        <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-400">
          ✅ ¡Mensaje enviado! Abriendo WhatsApp...
        </div>
      )}
      {sendStatus === "error" && (
        <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-400">
          ❌ Hubo un error al enviar. Por favor, intenta de nuevo o contáctanos por WhatsApp directamente.
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="from_name" className="block text-sm font-medium text-text-muted">Nombre completo *</label>
          <input
            type="text" name="from_name" id="from_name" value={formData.from_name} onChange={handleChange} required
            className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-start focus:border-accent-start transition"
            placeholder="Ej: Juan Pérez"
          />
        </div>

        <div>
          <label htmlFor="from_email" className="block text-sm font-medium text-text-muted">Correo electrónico *</label>
          <input
            type="email" name="from_email" id="from_email" value={formData.from_email} onChange={handleChange} required
            className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-start focus:border-accent-start transition"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-muted">Nombre de empresa (opcional)</label>
          <input
            type="text" name="company" id="company" value={formData.company} onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-start focus:border-accent-start transition"
            placeholder="Tu Empresa S.A."
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-text-muted">¿Sobre qué servicio quieres consultar? *</label>
          <div className="relative mt-1">
            <select
              ref={selectRef} id="service" name="service" value={formData.service} onChange={handleChange} required
              className="appearance-none block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-start focus:border-accent-start transition"
            >
              <option value="">Selecciona un servicio...</option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>{service.title}</option>
              ))}
              <option value="otro">Otro / Consultoría General</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
              <ChevronDownIcon />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-muted">Cuéntanos sobre tu proyecto *</label>
          <textarea
            id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required
            className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-start focus:border-accent-start transition resize-none"
            placeholder="Describe tu proyecto, necesidades o consultas..."
          />
        </div>

        <div>
          <button
            type="submit" disabled={isSending}
            className="w-full bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSending ? "Enviando..." : "📩 Enviar Mensaje"}
          </button>
        </div>

        <p className="text-xs text-text-muted text-center">
          Al enviar, te contactaremos por correo y te redirigiremos a WhatsApp
        </p>
      </form>
    </div>
  );
}
