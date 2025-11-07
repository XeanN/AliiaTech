import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { servicesArray } from '../data/servicesData.jsx'; 
import PageHeader from '../components/PageHeader.jsx'; 

// --- Iconos para los Pilares ---
const PilarIconWeb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent-start">
    <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.18.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.299l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.299-.21l.775-.387 1.64 1.64A6 6 0 0 0 18.384 21H19.5a1.5 1.5 0 0 0 1.5-1.5v-1.5c0-.433-.132-.845-.384-1.187l-1.64-1.64.775-.387c.342-.17.433-.56.21-1.299l-1.348-1.348c-.21-.21-.497-.329-.795-.329v-1.089c0-.426-.24-.815-.622-1.006l-.153-.076c-.433-.217-.956-.132-1.299.21l-.387.775-1.64-1.64A6 6 0 0 0 4.616 3H3.5a1.5 1.5 0 0 0-1.5 1.5v1.5c0 .433.132.845.384 1.187l1.64 1.64Z" />
  </svg>
);
const PilarIconSistemas = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent-start">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.375 1.518c-.207.375-.465.722-.777 1.018a3.75 3.75 0 0 1-5.696 0 3.75 3.75 0 0 1 0-5.696c.375-.207.722-.465 1.018-.777 1.518-.375 1.007-.375 1.007-.375h1.5M13.5 1.5v1.007a3 3 0 0 0 .375 1.518c.207.375.465.722.777 1.018a3.75 3.75 0 0 0 5.696 0 3.75 3.75 0 0 0 0-5.696c-.375-.207-.722-.465-1.018-.777A3 3 0 0 0 19.5 1.5h-1.5m-6 6v1.007a3 3 0 0 1-.375 1.518c-.207.375-.465.722-.777 1.018a3.75 3.75 0 0 1-5.696 0 3.75 3.75 0 0 1 0-5.696c.375-.207.722-.465 1.018-.777A3 3 0 0 1 7.5 7.5h1.5m6 6v1.007a3 3 0 0 0 .375 1.518c.207.375.465.722.777 1.018a3.75 3.75 0 0 0 5.696 0 3.75 3.75 0 0 0 0-5.696c-.375-.207-.722-.465-1.018-.777A3 3 0 0 0 19.5 13.5h-1.5" />
  </svg>
);
const PilarIconMarketing = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent-start">
     <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
  </svg>
);
const PilarIconIndustria = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent-start">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21v-4.5m0 4.5h-2.25m2.25 0h2.25m0 0v-4.5m0 4.5h2.25M12 21v-4.5m0 4.5h-2.25m2.25 0h2.25m0 0v-4.5m0 4.5h2.25M20.25 21v-4.5M12 3v2.25m6.364.364.707.707M21 12h-2.25m-.364 6.364-.707.707M12 21V12m0 0H4.5m7.5 0h7.5M12 12V3m0 0v2.25m-6.364.364-.707.707M3 12h2.25m.364 6.364.707.707" />
    </svg>
);

// Filtramos los servicios por Pilar
const pilar1 = servicesArray.filter(s => s.pillar === 'Desarrollo Web y E-commerce');
const pilar2 = servicesArray.filter(s => s.pillar === 'Sistemas Empresariales y Automatización');
const pilar3 = servicesArray.filter(s => s.pillar === 'Marketing y Estrategia Digital');
const pilar4 = servicesArray.filter(s => s.pillar === 'Soluciones por Industria');

// --- ¡NUEVO COMPONENTE DE TARJETA DE PILAR! ---
function PillarSection({ title, services, icon, aosDelay, id }) {
  return (
    <div 
      id={id} // El ID para el anclaje
      className="mb-16 scroll-mt-32" // ¡Ajustamos el scroll-margin!
      data-aos="fade-up" 
      data-aos-delay={aosDelay}
    >
      <div 
        className="bg-dark-card rounded-2xl p-8 border border-gray-700 shadow-2xl relative overflow-hidden" 
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-start to-accent-end"></div>
        
        <div className="flex items-center mb-8">
          <div className="p-3 bg-gray-900 rounded-full mr-4 border border-gray-700">
            {icon}
          </div>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              to={`/servicios/${service.slug}`} // ¡AHORA service.slug SÍ EXISTE!
              key={service.id}
              className="block bg-gray-900 p-6 rounded-xl shadow-lg hover:border-accent-start border border-gray-700 transition-colors"
            >
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-text-muted text-sm">{service.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
// ---------------------------------------------
        
function Services() {
  
  // --- LÓGICA PARA EL SCROLL AUTOMÁTICO ---
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); 
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); 
    }
  }, [location]); 
  // ------------------------------------------

  return (
    <>
      <PageHeader 
        title="Nuestros Pilares de Servicio"
        subtitle="Soluciones integrales para cada área de tu Transformación Digital."
        imageUrl="/Hero-Servicios.jpg"
      />

      <section className="content-card">
        <div className="container mx-auto px-6">
          
          <PillarSection 
            id="pilar-web"
            title="Desarrollo Web y E-commerce" 
            services={pilar1} 
            icon={<PilarIconWeb />}
            aosDelay="100" 
          />
          
          <PillarSection 
            id="pilar-sistemas"
            title="Sistemas y Automatización" 
            services={pilar2} 
            icon={<PilarIconSistemas />}
            aosDelay="200" 
          />
          
          <PillarSection 
            id="pilar-marketing"
            title="Marketing y Estrategia Digital" 
            services={pilar3} 
            icon={<PilarIconMarketing />}
            aosDelay="300" 
          />
          
          <PillarSection 
            id="pilar-industrias"
            title="Soluciones por Industria" 
            services={pilar4} 
            icon={<PilarIconIndustria />}
            aosDelay="400" 
          />

        </div>
      </section>
    </>
  );
}

export default Services;