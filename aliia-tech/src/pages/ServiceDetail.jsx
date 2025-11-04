    // src/pages/ServiceDetail.jsx
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

    return (
        <>
        <section className="h-[50vh] min-h-[400px] flex items-center justify-center relative text-white">
            <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url('${service.imageUrl}')` }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
            <span className="text-lg font-semibold text-blue-300">{service.category}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto mt-2">
                {service.title}
            </h1>
            </div>
        </section>

        {/* --- ¡AÑADIMOS FONDO BLANCO AQUÍ! --- */}
        <section className="bg-white py-20 text-gray-900">
            <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">
                    Descripción General
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    {service.longDescription}
                </p>
                </div>

                <div className="lg:col-span-1 bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">
                    Servicios Incluidos
                </h3>
                <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                    </li>
                    ))}
                </ul>
                </div>

            </div>
            </div>
        </section>

        {/* ¡Se queda azul, está bien! */}
        <section className="bg-blue-600 py-20">
            <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-white">
                ¿Interesado en este servicio?
            </h2>
            <p className="text-lg text-blue-100 mt-4 max-w-2xl mx-auto">
                Hablemos hoy mismo. Estamos aquí para ayudarte a alcanzar tus objetivos.
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
    export default ServiceDetail;