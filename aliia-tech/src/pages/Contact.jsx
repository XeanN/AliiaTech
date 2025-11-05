import React, { useEffect, useRef } from 'react'; // ¡Importamos useRef!
import { Link, useLocation } from 'react-router-dom'; 
import PageHeader from '../components/PageHeader.jsx'; 
import { servicesArray } from '../data/servicesData.jsx'; 

// --- Iconos ---
const PhoneIcon = () => (
  <svg className="w-6 h-6 text-accent-start" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);
const MailIcon = () => (
  <svg className="w-6 h-6 text-accent-start" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const LocationIcon = () => (
  <svg className="w-6 h-6 text-accent-start" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-text-muted">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);
// --------------------


function Contact() {
  
  // --- ¡LÓGICA ACTUALIZADA PARA LEER LA URL Y HACER SCROLL! ---
  const location = useLocation(); 
  const selectRef = useRef(null); 
  
  useEffect(() => {
    // 1. Obtenemos los parámetros (ej: ?servicio=...)
    const params = new URLSearchParams(location.search);
    const serviceSlug = params.get('servicio'); 
    
    // 2. Obtenemos el "hash" (ej: #formulario)
    const hash = location.hash;

    // 3. Seleccionamos el servicio (como antes)
    if (serviceSlug && selectRef.current) {
      selectRef.current.value = serviceSlug;
    }
    
    // 4. ¡NUEVA LÓGICA DE SCROLL!
    // Si la URL incluye #formulario...
    if (hash === '#formulario') {
      const element = document.getElementById('formulario');
      if (element) {
        // ...esperamos un poquito a que la página pinte...
        setTimeout(() => {
          // ¡Y hacemos scroll suave hasta el formulario!
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // 100ms de espera
      }
    }
    
  }, [location]); // Se ejecuta cada vez que la página carga
  // ---------------------------------
  
  return (
    <>
      <PageHeader 
        title="Contáctanos"
        subtitle="Estamos aquí para ayudarte a transformar tu negocio con tecnología."
        imageUrl="https://placehold.co/1920x400/be123c/white?text=Cont%C3%A1ctanos"
      />

      {/* Contenido de Contacto */}
      <section className="content-card" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* --- Formulario --- */}
            {/* ¡AÑADIMOS EL ID "formulario" AQUÍ! */}
            <div 
              id="formulario" 
              className="bg-dark-card p-8 rounded-xl shadow-lg border border-gray-700 scroll-mt-24" // scroll-mt-24 para dejar espacio arriba
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Envíanos un mensaje
              </h2>
              <form 
                action="#" 
                method="POST" 
                className="space-y-6"
              >
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-text-muted">Nombre completo</label>
                  <input type="text" name="full-name" id="full-name" required className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-accent-start focus:border-accent-start" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-muted">Correo electrónico</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-accent-start focus:border-accent-start" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-muted">Nombre de empresa (opcional)</label>
                  <input type="text" name="company" id="company" className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-accent-start focus:border-accent-start" />
                </div>

                {/* Desplegable con selección automática */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-muted">¿Sobre qué servicio quieres consultar?</label>
                  <div className="relative mt-1">
                    <select 
                      ref={selectRef}
                      id="service" 
                      name="service" 
                      required 
                      className="appearance-none mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-accent-start focus:border-accent-start"
                    >
                      <option value="">Por favor selecciona un servicio...</option>
                      
                      {servicesArray.map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.title}
                        </option>
                      ))}
                      
                      <option value="otro">Otro / Consultoría General</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                      <ChevronDownIcon />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-muted">Cuéntanos sobre tu proyecto</label>
                  <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-accent-start focus:border-accent-start" />
                </div>

                <div>
                  <button type="submit" className="w-full bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition">
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>

            {/* Información de Contacto */}
            <div className="pt-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Información de Contacto
              </h2>
              <p className="text-lg text-text-muted mb-8">
                También puedes contactarnos directamente por estos medios. Estaremos encantados de atenderte.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-dark-card text-accent-start p-3 rounded-full">
                    <PhoneIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Teléfono / WhatsApp</h3>
                    <p className="text-text-muted">+51 969 980 152</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-dark-card text-accent-start p-3 rounded-full">
                    <MailIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Correo Electrónico</h3>
                    <p className="text-text-muted">contacto@aliiia.tech</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-dark-card text-accent-start p-3 rounded-full">
                    <LocationIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Ubicación</h3>
                    <p className="text-text-muted">Lima, Perú</p>
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