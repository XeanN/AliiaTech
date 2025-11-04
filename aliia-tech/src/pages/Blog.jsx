// src/pages/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx'; 

function Blog() {
  return (
    <>
      <PageHeader 
        title="Blog & Novedades"
        subtitle="Aprende sobre innovación, inteligencia artificial, marketing y transformación digital."
        imageUrl="https://placehold.co/1920x400/0891b2/white?text=Nuestro+Blog"
      />

      {/* --- ¡AÑADIMOS FONDO BLANCO AQUÍ! --- */}
      <section className="bg-white py-20 text-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Link to="#" className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <img src="https://placehold.co/600x400/e0f2fe/0c4a6e?text=IA+y+Negocios" alt="IA y negocios" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  Cómo la IA está transformando las empresas
                </h3>
                <p className="text-gray-600 mb-4">
                  Explora cómo la IA puede ayudarte a automatizar tareas y aumentar tus ventas.
                </p>
                <span className="font-semibold text-blue-600 hover:text-blue-800 transition">
                  Leer más →
                </span>
              </div>
            </Link>
            <Link to="#" className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <img src="https://placehold.co/600x400/e0f2fe/0c4a6e?text=E-commerce" alt="E-commerce tips" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  5 estrategias clave para tu tienda online
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimiza tu e-commerce con SEO, automatización y estrategias digitales.
                </p>
                <span className="font-semibold text-blue-600 hover:text-blue-800 transition">
                  Leer más →
                </span>
              </div>
            </Link>
            <Link to="#" className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <img src="https://placehold.co/600x400/e0f2fe/0c4a6e?text=Transformaci%C3%B3n+Digital" alt="Transformación digital" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  Transformación digital: prepara tu empresa
                </h3>
                <p className="text-gray-600 mb-4">
                  Descubre los pasos esenciales para digitalizar tus operaciones y ser competitivo.
                </p>
                <span className="font-semibold text-blue-600 hover:text-blue-800 transition">
                  Leer más →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- ¡AÑADIMOS FONDO BLANCO AQUÍ! --- */}
      <section className="bg-white pt-10 pb-20">
        <div className="container mx-auto px-6 text-center bg-blue-600 text-white p-16 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-extrabold">
            ¿Quieres escribir para nosotros?
          </h2>
          <p className="text-lg text-blue-100 mt-4 max-w-2xl mx-auto">
            Estamos buscando expertos en tecnología y negocios. ¡Contáctanos!
          </p>
          <Link 
            to="/contacto" 
            className="inline-block mt-8 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Contactar
          </Link>
        </div>
      </section>
    </>
  );
}
export default Blog;