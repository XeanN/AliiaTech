// src/pages/Contact.jsx
import React from 'react';
import PageHeader from '../components/PageHeader.jsx'; 
const PhoneIcon = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>);
const MailIcon = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);
const LocationIcon = () => (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);

function Contact() {
  return (
    <>
      <PageHeader 
        title="Contáctanos"
        subtitle="Estamos aquí para ayudarte a transformar tu negocio con tecnología."
        imageUrl="https://placehold.co/1920x400/be123c/white?text=Cont%C3%A1ctanos"
      />

      {/* --- ¡AÑADIMOS FONDO BLANCO AQUÍ! --- */}
      <section className="bg-white py-20 text-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6">
                Envíanos un mensaje
              </h2>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Nombre completo</label>
                  <input type="text" name="full-name" id="full-name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Nombre de empresa (opcional)</label>
                  <input type="text" name="company" id="company" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Selecciona un servicio</label>
                  <select id="service" name="service" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Por favor selecciona</option>
                    <option value="sistemas">Sistemas y Cloud</option>
                    <option value="web">Web & Marketing</option>
                    <option value="consultoria">Consultoría e Innovación</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Cuéntanos sobre tu proyecto</label>
                  <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
            <div className="pt-8">
              <h2 className="text-3xl font-bold mb-6">
                Información de Contacto
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                También puedes contactarnos directamente por estos medios. Estaremos encantados de atenderte.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full">
                    <PhoneIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Teléfono / WhatsApp</h3>
                    <p className="text-gray-600">+51 969 980 152</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full">
                    <MailIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Correo Electrónico</h3>
                    <p className="text-gray-600">contacto@aliiia.tech</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full">
                    <LocationIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Ubicación</h3>
                    <p className="text-gray-600">Lima, Perú</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;