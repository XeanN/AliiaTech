import { Link } from "react-router-dom";
import { useState } from 'react';
// import HeroParticles from '../components/HeroParticles.jsx'; // Comentado

// --- Iconos para los Pilares (sin cambios) ---
const PilarIconWeb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent-start">
    <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.18.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.299l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.299-.21l.775-.387 1.64 1.64A6 6 0 0 0 18.384 21H19.5a1.5 1.5 0 0 0 1.5-1.5v-1.5c0-.433-.132-.845-.384-1.187l-1.64-1.64.775-.387c.342-.17.433-.56.21-1.299l-1.348-1.348c-.21-.21-.497-.329-.795-.329v-1.089c0-.426-.24-.815-.622-1.006l-.153-.076c.433-.217-.956-.132-1.299.21l-.387.775-1.64-1.64A6 6 0 0 0 4.616 3H3.5a1.5 1.5 0 0 0-1.5 1.5v1.5c0 .433.132.845.384 1.187l1.64 1.64Z" />
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

    
function Home() {
  return (
    <>
      {/* --- 1. SECCIÓN HERO --- */}
      <section
        className="relative min-h-screen flex items-center
                  text-white overflow-hidden bg-dark-bg
                  [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]" // <--- ¡CAMBIO 1: AÑADIDA LA MÁSCARA DE FUNDIDO!
      >
        {/* Capa 0: Imagen de Galaxia (Fondo base) (z-0) */}
        <img
          src="/Ali_home.png"
          alt="Galaxia de fondo"
          className="absolute z-0 w-full h-full object-cover"
        />

        {/* Capa 2: Video de Fondo (z-20) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-20 w-full h-full object-cover opacity-75"
        >
          <source src="/home.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>

        {/* Capa 2.5: TINTE DE COLOR TECNOLÓGICO (z-25) */}
        <div
          className="absolute inset-0 z-25 opacity-50 mix-blend-soft-light"
          style={{
            backgroundImage: 'linear-gradient(to top, #011f2d, #0c4b5c 57%, #17a3b3 94%)'
          }}
          aria-hidden="true"
        ></div>


        {/* Capa 3: Paisaje Parallax (z-30) */}
        <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-90 z-30">
          <img
            src="/home-header-1.png"
            alt=""
            className="absolute bottom-0 w-full h-auto"
          />
          <img
            src="/home-header-4.png"
            alt=""
            className="absolute bottom-0 w-full h-auto"
          />
          <img
            src="/home-header-2.png"
            alt=""
            className="absolute bottom-0 w-full h-auto"
          />
          <img
            src="/home-header-3.png"
            alt=""
            className="absolute bottom-0 w-full h-auto"
          />
          <img
            src="/home-header-5.png"
            alt="Silueta de persona mirando al cielo"
            className="absolute bottom-0 w-full h-auto"
          />
        </div>


        {/* Capa 4: Contenido de Texto y Botones (z-40) */}
        <div className="relative z-40 container mx-auto px-6 flex flex-col items-center text-center pt-24 pb-32">
          <div className="max-w-4xl" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight md:leading-tight lg:leading-none">
              <span className="text-white">Socios en tu</span> <br /> 
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">Transformación Digital</span>
            </h1>
            <p className="text-lg md:text-xl text-text-light mt-6 max-w-2xl mx-auto"> 
              No solo creamos software. Integramos Sistemas Empresariales, IA y
              Marketing para optimizar tu negocio.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contacto"
              className="inline-block bg-gradient-to-r from-cyan-400 to-emerald-500 text-dark-bg font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition"
            >
              Agendar Consultoría
            </Link>
            <Link
              to="/servicios"
              className="inline-block bg-[#1a2333] text-text-light font-semibold px-8 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              Explorar Servicios
            </Link>
          </div>
        </div>

        {/* <--- ¡CAMBIO 2: HEMOS BORRADO LOS DOS DIVs CON LOS SVGs DE LAS CURVAS! ---> */}
        {/* Ya no hay ningún SVG de transición aquí. La sección termina con el fundido. */}

      </section>

      {/* <--- ¡LOS SVGs DE TRANSICIÓN QUE ESTABAN AQUÍ FUERON ELIMINADOS ---> */}


      {/* --- 2. SECCIÓN DE PILARES ESTRATÉGICOS --- */}
      {/* ¡CAMBIO 3: AÑADIDO MARGEN NEGATIVO PARA SUPERPONER! */}
      <section 
        className="relative z-10 -mt-16 md:-mt-20" // <-- Añadido -mt-16 (móvil) y md:-mt-20 (desktop)
        data-aos="fade-up"
      > 
        <div className="content-card"> {/* El padding se maneja aquí adentro */}
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-white">
                Nuestros Pilares Estratégicos
              </h2>
              <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">
                Soluciones integrales que cubren cada área de tu negocio.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* ... (Todos los 4 pilares sin cambios) ... */}
              <Link
                to="/servicios#pilar-web"
                className="block bg-dark-card/50 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-700 hover:border-accent-start transition-colors"
                data-aos="fade-up" data-aos-delay="100"
              >
                <div className="bg-gray-900 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <PilarIconWeb />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Web y E-commerce</h3>
                <p className="text-text-muted">Tiendas online, apps móviles y sitios web corporativos.</p>
              </Link>
              <Link
                to="/servicios#pilar-sistemas"
                className="block bg-dark-card/50 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-700 hover:border-accent-start transition-colors"
                data-aos="fade-up" data-aos-delay="200"
              >
                <div className="bg-gray-900 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <PilarIconSistemas />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Sistemas y Automatización</h3>
                <p className="text-text-muted">Software ERP, Logística (SUNAT), IA y Servicios Cloud.</p>
              </Link>
               <Link
                to="/servicios#pilar-marketing"
                className="block bg-dark-card/50 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-700 hover:border-accent-start transition-colors"
                data-aos="fade-up" data-aos-delay="300"
              >
                <div className="bg-gray-900 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <PilarIconMarketing />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Marketing y Estrategia</h3>
                <p className="text-text-muted">Power BI, Marketing Conversacional y Auditorías de Seguridad.</p>
              </Link>
              <Link
                to="/servicios#pilar-industrias"
                className="block bg-dark-card/50 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-700 hover:border-accent-start transition-colors"
                data-aos="fade-up" data-aos-delay="400"
              >
                <div className="bg-gray-900 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <PilarIconIndustria />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Soluciones por Industria</h3>
                <p className="text-text-muted">Soluciones para Turismo, Constructoras y Educación.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. SECCIÓN "SOBRE NOSOTROS" --- */}
      <section className="content-card relative z-10" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* ... (Contenido de Sobre Nosotros sin cambios) ... */}
            <div data-aos="fade-right">
              <span className="font-semibold uppercase bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">Sobre Nosotros</span>
              <h2 className="text-4xl font-extrabold mt-2 text-white">
                Apasionados por la Tecnología y la Ciberseguridad
              </h2>
              <p className="text-lg text-text-muted mt-6 leading-relaxed">
                Somos un equipo dedicado a brindar soluciones innovadoras que no solo cumplen, sino que superan las expectativas.
                Nuestra misión es ser tu aliado tecnológico.
              </p>
              <Link
                to="/nosotros"
                className="inline-block mt-8 bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition"
              >
                 Conoce más
              </Link>
            </div>
            <div data-aos="fade-left">
              <img
                src="https://placehold.co/600x400/1f2937/10b981?text=Nuestro+Equipo"
                alt="Equipo de Aliia Tech"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. SECCIÓN "CALL TO ACTION (CTA)" --- */}
      <section className="bg-transparent py-20 relative z-10" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">
            Hablemos hoy mismo. Estamos aquí para ayudarte a alcanzar tus objetivos tecnológicos y de seguridad.
          </p>
          <Link
            to="/contacto"
            className="inline-block mt-8 bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition"
          >
              Contáctanos ahora
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;