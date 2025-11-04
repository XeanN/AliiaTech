// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { servicesArray } from '../data/servicesData.jsx'; 
import PageHeader from '../components/PageHeader.jsx'; 

function Services() {
  return (
    <>
      <PageHeader 
        title="Nuestros Servicios"
        subtitle="Soluciones integrales para la transformación digital de tu empresa."
        imageUrl="https://placehold.co/1920x400/0d9488/white?text=Servicios"
      />

      {/* --- ¡AÑADIMOS FONDO BLANCO AQUÍ! --- */}
      <section className="bg-white py-20 text-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesArray.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-2xl p-8 flex flex-col border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {service.icon} 
                  </div>
                  <h3 className="text-2xl font-bold">
                    {service.category}
                  </h3>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <Link to={`/servicios/${service.slug}`} className="text-gray-700 hover:text-blue-600 hover:underline">
                        {feature}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to={`/servicios/${service.slug}`} className="mt-auto inline-block text-center w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
                  Ver Detalles de {service.category}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. Llamado a la Acción (CTA) --- */}
      {/* ¡AÑADIMOS FONDO BLANCO AQUÍ! */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center bg-blue-600 text-white p-16 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-extrabold">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-lg text-blue-100 mt-4 max-w-2xl mx-auto">
            Hablemos hoy mismo. Adaptamos nuestras soluciones a tus necesidades exactas.
          </p> 
          <Link to="/contacto" className="inline-block mt-8 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
            Contáctanos ahora
          </Link>
        </div>
      </section>
    </>
  );
}
export default Services;