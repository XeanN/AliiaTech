// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx'; 
const MissionIcon = () => (<svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6" /></svg>);
const VisionIcon = () => (<svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>);
const ValuesIcon = () => (<svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 19m7-9V5a2 2 0 00-2-2h-3a2 2 0 00-2 2v5m0 0l-3 3m0 0l-3-3m3 3V5" /></svg>);

function About() {
  return (
    <>
      <PageHeader 
        title="Sobre Nosotros"
        subtitle="Conoce más sobre nuestro equipo, nuestra misión y los valores que nos impulsan."
        imageUrl="https://placehold.co/1920x400/5b21b6/white?text=Sobre+Nosotros"
      />

      {/* --- ¡AÑADIMOS FONDO BLANCO AQUÍ! --- */}
      <section className="bg-white py-20 text-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold">
              Transformando Ideas en Realidad Digital
            </h2>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              <strong>Aliia Tech</strong> es una empresa tecnológica peruana... (tu texto)
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <MissionIcon />
              <h3 className="text-2xl font-bold my-4">🌐 Misión</h3>
              <p className="text-gray-600">
                Impulsar la digitalización y modernización de empresas... (tu texto)
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <VisionIcon />
              <h3 className="text-2xl font-bold my-4">🎯 Visión</h3>
              <p className="text-gray-600">
                Ser reconocidos como una de las empresas líderes... (tu texto)
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <ValuesIcon />
              <h3 className="text-2xl font-bold my-4">💡 Valores</h3>
              <ul className="space-y-2 text-gray-600 text-left pl-4">
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

      {/* --- ¡AÑADIMOS FONDO BLANCO AQUÍ! --- */}
      <section className="bg-white pt-10 pb-20">
        <div className="container mx-auto px-6 text-center bg-blue-600 text-white p-16 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-extrabold">
            Únete a nuestro equipo
          </h2>
          <p className="text-lg text-blue-100 mt-4 max-w-2xl mx-auto">
            ¿Eres un apasionado por la tecnología? Estamos buscando talento como tú.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block mt-8 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Envía tu CV
          </Link>
        </div>
      </section>
    </>
  );
}
export default About;