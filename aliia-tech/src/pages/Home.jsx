// src/pages/Home.jsx
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard.jsx";

// --- Iconos SVG (los definimos aquí para usarlos fácil) ---
const WebIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 0-3 16.5" />
  </svg>
);
const SecurityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 0 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);
const AiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M8.25 21v-1.5M4.5 15.75H3m18 0h-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25a.75.75 0 0 1 .75.75V18a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm0-3.75a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75Zm0-3.75a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0V8.25a.75.75 0 0 1 .75-.75Z" />
  </svg>
);

function Home() {
  return (
    <>
      {/* --- 1. SECCIÓN HERO (Ahora con texto blanco) --- */}
      <section className="bg-transparent pt-40 pb-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl mx-auto">
            Innovamos tu empresa con tecnología, IA y soluciones digitales.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mt-6 max-w-2xl mx-auto">
            Somos tu socio estratégico para transformar y asegurar tu negocio en el mundo digital.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contacto" 
              className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Cotiza aquí
            </Link>
            <Link 
              to="/servicios" 
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg border border-blue-600 hover:bg-gray-100 transition"
            >
              Explorar servicios
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. SECCIÓN DE SERVICIOS (¡Ahora con fondo blanco!) --- */}
      <section className="bg-white py-20 text-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Soluciones diseñadas para impulsar tu crecimiento y seguridad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard 
              icon={<WebIcon />}
              title="Desarrollo Web"
              description="Creamos sitios web y aplicaciones robustas, rápidas y escalables adaptadas a tus necesidades."
            />
            <ServiceCard 
              icon={<SecurityIcon />}
              title="Seguridad Informática"
              description="Protegemos tus activos digitales con auditorías, pentesting y estrategias de ciberseguridad avanzadas."
            />
            <ServiceCard 
              icon={<AiIcon />}
              title="Autenticación & IA"
              description="Integramos sistemas de autenticación seguros y soluciones de IA para optimizar tus procesos."
            />
          </div>
        </div>
      </section>

      {/* --- 3. SECCIÓN "SOBRE NOSOTROS" (¡Ahora con fondo blanco!) --- */}
      <section className="bg-white py-20 text-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-blue-600 font-semibold uppercase">Sobre Nosotros</span>
              <h2 className="text-4xl font-extrabold mt-2">
                Apasionados por la Tecnología y la Ciberseguridad
              </h2>
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                Somos un equipo dedicado a brindar soluciones innovadoras que no solo cumplen, sino que superan las expectativas. 
                Nuestra misión es ser tu aliado tecnológico, garantizando la seguridad y eficiencia de tus operaciones.
              </p>
              <Link 
                to="/nosotros" 
                className="inline-block mt-8 bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
              >
                Conoce más
              </Link>
            </div>
            
            <div>
              <img 
                src="https://placehold.co/600x400/3b82f6/white?text=Nuestro+Equipo" 
                alt="Equipo de Aliia Tech"
                className="rounded-xl shadow-2xl"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* --- 4. SECCIÓN "CALL TO ACTION (CTA)" (¡Se queda azul, está bien!) --- */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-lg text-blue-100 mt-4 max-w-2xl mx-auto">
            Hablemos hoy mismo. Estamos aquí para ayudarte a alcanzar tus objetivos tecnológicos y de seguridad.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block mt-8 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Contáctanos ahora
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;