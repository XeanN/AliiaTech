import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogData } from '../data/blogData.jsx'; 

function BlogDetail() {
    const { postSlug } = useParams(); 
    const navigate = useNavigate(); 
    const post = blogData[postSlug]; 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [postSlug]);

    if (!post) {
        useEffect(() => {
        navigate('/blog');
        }, [navigate]); 
        return null; 
    }

    return (
        <>
        {/* --- 1. Encabezado --- */}
        {/* ¡CAMBIO 1: AÑADIDO EL FUNDIDO! */}
        <section 
          className="h-[50vh] min-h-[500px] flex items-center justify-center relative text-white
                    [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
        >
            <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url('${post.imageUrl}')` }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="container mx-auto px-6 text-center relative z-10" data-aos="fade-in">
            <span className="text-lg font-semibold text-accent-start">Blog de Aliia Tech</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto mt-2">
                {post.title}
            </h1>
            <p className="mt-4 text-text-muted">Publicado por {post.author} el {post.date}</p>
            </div>
        </section>

        {/* --- 2. Contenido del Artículo --- */}
        {/* ¡CAMBIO 2: AÑADIDO MARGEN NEGATIVO Y Z-INDEX! */}
        <section 
          className="content-card relative z-10 -mt-0 md:-mt-4"
        >
            <div className="container mx-auto px-6">
            {/* Usamos 'prose' de Tailwind para estilizar el HTML del blog automáticamente */}
            <div 
                className="prose prose-lg prose-invert max-w-3xl mx-auto" 
                data-aos="fade-up"
            >
                {post.content}
            </div>
            </div>
        </section>

        {/* --- 3. CTA (Sin cambios) --- */}
        <section className="bg-dark-bg py-20" data-aos="fade-up">
            <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-white">
                ¿Listo para transformar tu negocio?
            </h2>
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
    
    export default BlogDetail;