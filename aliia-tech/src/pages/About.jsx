import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx'; 

// Iconos (ahora con color de acento)
const MissionIcon = () => (
  <svg className="w-12 h-12 text-accent-start" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6" /></svg>
);
const VisionIcon = () => (
  <svg className="w-12 h-12 text-accent-start" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);
const ValuesIcon = () => (
  <svg className="w-12 h-12 text-accent-start" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 19m7-9V5a2 2 0 00-2-2h-3a2 2 0 00-2 2v5m0 0l-3 3m0 0l-3-3m3 3V5" /></svg>
);

function About() {
  return (
    <>
      <PageHeader 
        title="Sobre Nosotros"
        subtitle="Conoce más sobre nuestro equipo, nuestra misión y los valores que nos impulsan."
        imageUrl="/AliiaTech/Hero-Nosotros.jpg"
      />

      {/* Contenido de Nosotros (¡AHORA CON TEMA OSCURO!) */}
      <section className="content-card" data-aos="fade-up">
        <div className="container mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold text-white">
              Transformando Ideas en Realidad Digital
            </h2>
            <p className="text-lg text-text-muted mt-6 leading-relaxed">
              <strong>Aliia Tech</strong> es una empresa tecnológica peruana enfocada en brindar soluciones innovadoras en desarrollo web, 
              automatización con IA, marketing digital y transformación empresarial. 
              Nuestro objetivo es ayudar a las organizaciones a crecer, optimizar procesos y adaptarse a la era digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            
            <div className="bg-dark-card p-8 rounded-xl shadow-lg border border-gray-700" data-aos="fade-up" data-aos-delay="100">
              <MissionIcon />
              <h3 className="text-2xl font-bold text-white my-4">🌐 Misión</h3>
              <p className="text-text-muted">
                Impulsar la digitalización y modernización de empresas y emprendedores a través de la tecnología, 
                inteligencia artificial y estrategias digitales efectivas.
              </p>
            </div>

            <div className="bg-dark-card p-8 rounded-xl shadow-lg border border-gray-700" data-aos="fade-up" data-aos-delay="200">
              <VisionIcon />
              <h3 className="text-2xl font-bold text-white my-4">🎯 Visión</h3>
              <p className="text-text-muted">
                Ser reconocidos como una de las empresas líderes en innovación tecnológica en Latinoamérica, 
                ofreciendo soluciones integrales que conecten la tecnología con las personas.
              </p>
            </div>

            <div className="bg-dark-card p-8 rounded-xl shadow-lg border border-gray-700" data-aos="fade-up" data-aos-delay="300">
              <ValuesIcon />
              <h3 className="text-2xl font-bold text-white my-4">💡 Valores</h3>
              <ul className="space-y-2 text-text-muted text-left pl-4">
                <li>🔹 Innovación constante</li>
                <li>🔹 Compromiso con nuestros clientes</li>
                <li>🔹 Ética y transparencia</li>
                <li>🔹 Calidad y mejora continua</li>
                <li>🔹 Pasión por la tecnología</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA (Sobre fondo oscuro) */}
      <section className="bg-dark-bg py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white">
            Únete a nuestro equipo
          </h2>
          <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">
            ¿Eres un apasionado por la tecnología? Estamos buscando talento como tú.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block mt-8 bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Envía tu CV
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;