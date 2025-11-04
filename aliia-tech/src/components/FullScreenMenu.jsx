    import React from 'react';
    import { NavLink, Link } from 'react-router-dom';

    // --- Iconos de Redes Sociales (los mismos del Footer) ---
    const LinkedInIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
    );
    const XIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.512 11.24h-6.617l-5.36-7.009-6.376 7.009h-3.308l7.748-8.998L2.25 2.25h6.778l4.723 6.274L18.244 2.25zM16.94 20.25h1.56l-6.8-9.06L5.3 4h-1.66l6.9 9.06L16.94 20.25z" />
    </svg>
    );

    // Clases para los enlaces (versión oscura)
    const linkClass = "text-3xl font-bold text-gray-300 hover:text-white transition-colors";
    const subLinkClass = "text-lg text-gray-400 hover:text-white transition-colors";

    function FullScreenMenu({ onClose }) {
    return (
        // Fondo del Overlay: Oscuro y con desenfoque
        <div className="fixed inset-0 z-[100] flex flex-col bg-gray-900 bg-opacity-95 backdrop-blur-sm text-white transition-opacity duration-300 overflow-y-auto">
        
        {/* 1. Cabecera del Menú (Logo y Botón de Cerrar) */}
        <div className="container mx-auto px-6 py-4 flex justify-between items-center flex-shrink-0">
            <span className="text-2xl font-bold text-white">Aliia Tech</span>
            <button 
            onClick={onClose} 
            className="text-white hover:text-gray-300"
            aria-label="Cerrar menú"
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </button>
        </div>

        {/* 2. Contenido del Menú (con scroll si es necesario) */}
        <div className="flex-grow flex items-center justify-center py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Columna 1: Inicio y Servicios */}
            <div className="space-y-6">
                <NavLink to="/" onClick={onClose} className={linkClass}>
                Inicio
                </NavLink>
                
                <div className="flex flex-col space-y-4 mt-4 pl-4 border-l-2 border-gray-700">
                <NavLink to="/servicios" onClick={onClose} className="text-3xl font-bold text-gray-300 hover:text-white transition-colors">
                    Servicios
                </NavLink>
                {/* ¡AQUÍ ESTÁN TUS SUBTÍTULOS! */}
                <Link to="/servicios/sistemas-y-cloud" onClick={onClose} className={subLinkClass}>Sistemas y Cloud</Link>
                <Link to="/servicios/web-y-ecommerce" onClick={onClose} className={subLinkClass}>Web & E-commerce</Link>
                <Link to="/servicios/consultoria-e-innovacion" onClick={onClose} className={subLinkClass}>Consultoría e Innovación</Link>
                </div>
            </div>

            {/* Columna 2: Nosotros y Blog (¡CORREGIDO!) */}
            <div className="space-y-6">
                {/* 'Nosotros' ahora tiene su propio div */}
                <div>
                <NavLink to="/nosotros" onClick={onClose} className={linkClass}>
                    Nosotros
                </NavLink>
                </div>
                {/* 'Blog' ahora tiene su propio div */}
                <div>
                <NavLink to="/blog" onClick={onClose} className={linkClass}>
                    Blog
                </NavLink>
                </div>
                {/* Puedes añadir subtítulos de blog aquí si quieres */}
            </div>

            {/* Columna 3: Contacto (Inspirado en tu imagen) */}
            <div className="pt-8 md:pt-0">
                <h3 className="text-2xl font-bold text-white mb-6">Contáctanos</h3>
                <NavLink 
                to="/contacto" 
                onClick={onClose} 
                className="inline-block text-lg border-2 border-white rounded-full px-8 py-3 text-white hover:bg-white hover:text-gray-900 transition-colors"
                >
                Escríbenos
                </NavLink>
                
                <div className="mt-8 space-y-4 text-gray-300">
                <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                    Lima, Perú
                </p>
                <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                    contacto@aliiia.tech
                </p>
                </div>

                <div className="flex space-x-6 mt-8">
                <a href="#" className="text-gray-400 hover:text-white transition">
                    <LinkedInIcon />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                    <XIcon />
                </a>
                </div>
            </div>

            </div>
        </div>
        </div>
    );
    }

    export default FullScreenMenu;