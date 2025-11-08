import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx'; 
import { blogArray } from '../data/blogData.jsx'; // ¡Importamos los datos del blog!

function Blog() {
  return (
    <>
      <PageHeader 
        title="Blog & Novedades"
        subtitle="Aprende sobre innovación, inteligencia artificial, marketing y transformación digital."
        imageUrl="/Hero-Blog.jpg"
      />

      <section className="content-card" data-aos="fade-up">
        <div className="container mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* ¡Iteramos sobre los datos del blog! */}
            {blogArray.map((post, index) => (
              <Link 
                key={index}
                to={`/blog/${post.slug}`} // ¡Enlace dinámico!
                className="block bg-dark-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-700"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-text-muted mb-4">
                    {post.shortDescription}
                  </p>
                  <span className="font-semibold text-accent-start hover:text-accent-end transition">
                    Leer más →
                  </span>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* CTA (Sobre fondo oscuro) */}
      <section className="bg-dark-bg py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-white">
            ¿Quieres escribir para nosotros?
          </h2>
          <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">
            Estamos buscando expertos en tecnología y negocios. ¡Contáctanos!
          </p> 
          <Link 
            to="/contacto" 
            className="inline-block mt-8 bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Contactar
          </Link>
        </div>
      </section>
    </>
  );
}

export default Blog;