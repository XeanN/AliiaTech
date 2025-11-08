import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData.jsx'; 

function ServiceDetail() {
    const { serviceSlug } = useParams(); 
    const navigate = useNavigate(); 
    const service = servicesData[serviceSlug]; 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceSlug]);

    if (!service) {
        useEffect(() => {
        navigate('/servicios');
        }, [navigate]); 
        return null; 
    }

    // --- ¡La Plantilla de 8 Pasos! ---
    return (
        <>
        {/* --- 1. HÉROE (Título de la Solución) --- */}
        {/* ¡CAMBIO 1: AÑADIDO EL FUNDIDO! */}
        <section 
          className="h-[50vh] min-h-[500px] flex items-center justify-center relative text-white
                    [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
        >
            <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url('${service.imageUrl}')` }}
          	></div>
            <div className="absolute inset-0 bg-black opacity-60"></div>
          	<div className="container mx-auto px-6 text-center relative z-10" data-aos="fade-in">
          	<span className="text-lg font-semibold text-accent-start">{service.pillar}</span>
          	<h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto mt-2">
          		{service.heroTitle}
          	</h1>
          	</div>
        </section>

      	{/* --- Contenido del Blueprint (8 Pasos) --- */}
      	{/* ¡CAMBIO 2: AÑADIDO MARGEN NEGATIVO Y Z-INDEX! */}
      	<section className="content-card relative z-10 -mt-8 md:-mt-12">
          	<div className="container mx-auto px-6">
          	<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          		
          		{/* Columna Izquierda: Detalles */}
          		<div className="lg:col-span-2 space-y-12">
          		
          		<article data-aos="fade-up">
          			<h2 className="text-3xl font-bold text-white mb-4">El Problema</h2>
          			<p className="text-lg text-text-muted leading-relaxed">{service.problem}</p>
          		</article>
          		
          		<article data-aos="fade-up">
          			<h2 className="text-3xl font-bold text-white mb-4">Nuestra Solución</h2>
          			<p className="text-lg text-text-muted leading-relaxed">{service.solution}</p>
          		</article>

          		<article data-aos="fade-up">
          			<h2 className="text-3xl font-bold text-white mb-6">Nuestro Proceso</h2>
          			<div className="space-y-4">
          			{service.process.map((step, index) => (
          				<div key={index} className="flex items-start p-4 bg-dark-bg rounded-lg border border-gray-700">
          				<span className="text-2xl font-bold text-accent-start mr-4">{step.title.split('.')[0]}.</span>
          				<div>
          					<h4 className="text-xl font-semibold text-white">{step.title.split('.')[1]}</h4>
        				<p className="text-text-muted">{step.description}</p>
          				</div>
          				</div>
          			))}
          			</div>
          		</article>

          		<article data-aos="fade-up" className="bg-dark-bg p-8 rounded-xl border border-gray-700 italic">
          			<p className="text-2xl text-white leading-relaxed">"{service.socialProof.quote}"</p>
          			<footer className="mt-4 text-accent-start not-italic">
          			— {service.socialProof.author}, <span className="text-text-muted">{service.socialProof.company}</span>
        		</footer>
          		</article>

          		</div>

          		{/* Columna Derecha: Resumen */}
          		<aside className="lg:col-span-1 space-y-8 sticky top-28 h-fit">
          		<div className="bg-dark-card p-8 rounded-xl shadow-lg border border-gray-700" data-aos="fade-left">
        		<h3 className="text-2xl font-bold text-white mb-6">
          				Características y Entregables
          			</h3>
          			<ul className="space-y-4">
          			{service.features.map((feature, index) => (
          				<li key={index} className="flex items-start">
          				<svg className="w-6 h-6 text-accent-end mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          				</svg>
          				<span className="text-text-muted">{feature}</span>
       				</li>
          			))}
          			</ul>
          		</div>

          		<div className="bg-dark-card p-8 rounded-xl shadow-lg border border-gray-700" data-aos="fade-left" data-aos-delay="100">
          			<h3 className="text-2xl font-bold text-white mb-6">
          				Tecnologías que Utilizamos
          			</h3>
       			<div className="flex flex-wrap gap-2">
          			{service.tech.map((tech, index) => (
          				<span key={index} className="bg-gray-700 text-text-light text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
          			))}
          			</div>
          		</div>
          		</aside>

     		</div>
  	    </div>
    	</section>

      	{/* --- 8. CTA (Llamado a la Acción) --- */}
    	<section className="bg-dark-bg py-20" data-aos="fade-up">
    	    <div className="container mx-auto px-6 text-center">
    	    <h2 className="text-4xl font-extrabold text-white">
        			¿Interesado en este servicio?
      	  </h2>
    	    {/* --- ¡AQUÍ ESTÁ EL CAMBIO! --- */}
     	{/* Añadimos "#formulario" al final de la URL */}
    	    <Link 
        		to={`/contacto?servicio=${service.slug}#formulario`} 
        		className="inline-block mt-8 bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition"
    	>
        		{service.cta} 
      	  </Link>
    	    </div>
  	  </section>
    	</>
  	);
  	}

  	export default ServiceDetail;