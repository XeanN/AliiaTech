import React, { useEffect, useState } from 'react'; 
import { NavLink, Link } from 'react-router-dom';

// --- Iconos de Contacto y Redes Sociales (Corregidos) ---
const MapPinIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" className="w-6 h-6 mr-3 text-cyan-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);
const PhoneIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" className="w-6 h-6 mr-3 text-cyan-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.822-1.423-5.146-3.746-6.57-6.57l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
  </svg>
);
const EmailIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" className="w-6 h-6 mr-3 text-cyan-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
const FacebookIcon = () => (
<svg fill="currentColor" viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
);
const InstagramIcon = () => (
<svg
    fill="none" 
    stroke="currentColor" 
    strokeWidth={2} 
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24" 
    className="h-7 w-7" 
    aria-hidden="true"
>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
</svg>
);
const LinkedInIcon = () => (
<svg fill="currentColor" viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
);
const BehanceIcon = () => (
<svg fill="currentColor" viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true"><path d="M7.93 10.155c.348-.06.69-.09 1.028-.09.93 0 1.635.495 1.635 1.335 0 .885-.75 1.38-1.77 1.38h-1.74v-2.625h.847zm.847 6.135c-.405 0-.795-.03-1.17-.09v-4.83h1.83c1.47 0 2.49.885 2.49 2.37 0 1.74-1.11 2.55-2.61 2.55h-.54zm-2.025 2.025c.57.12 1.155.18 1.755.18 1.95 0 3.315-.99 3.315-2.82 0-1.47-.96-2.4-2.235-2.73.96-.27 1.695-1.125 1.695-2.31 0-1.425-1.02-2.475-2.91-2.475-.615 0-1.23.075-1.815.21v9.945h.195zM15 13.515h3.015v-1.29H15v1.29zm0 2.895h3.015v-1.29H15v1.29zM16.59 9h-2.34v-1.5h5.505V9h-2.34v7.41h-.825V9zM0 2.25h24v19.5H0V2.25z" /></svg>
);

// --- Clases de Estilo del Menú (Sin cambios) ---
const mainNavLinkClass = `
block text-3xl font-bold text-white relative group 
py-2 transition-all duration-300 ease-in-out w-fit
`;
const mainNavLinkHoverEffect = `
group-hover:text-transparent 
group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 
group-hover:bg-clip-text
group-hover:scale-105 transform
`;

const pillarTitleClass = `
text-xl font-semibold text-white mb-2 uppercase 
tracking-widest group-hover:text-cyan-300 transition-all duration-300
`;
const subLinkClass = "block text-base font-light text-gray-400 hover:text-cyan-300 hover:translate-x-2 transition-all duration-300 py-1";
const contactTextClass = "text-lg text-gray-300 hover:text-white transition-colors duration-300";

// --- Componente de Estilos para el Scroll (Sin cambios) ---
const ScrollbarStyles = () => (
<style>{`
    /* Firefox */
    .elegant-scroll {
    scrollbar-width: thin;
    scrollbar-color: #22d3ee #374151; /* Pulgar (cyan-400) y Riel (gray-700) */
    }
    
    /* WebKit (Chrome, Safari, Edge) */
    .elegant-scroll::-webkit-scrollbar {
    width: 8px; /* Ancho del scroll */
    }
    
    .elegant-scroll::-webkit-scrollbar-track {
    background: #374151; /* Color del riel (gray-700) */
    border-radius: 4px;
    }
    
    .elegant-scroll::-webkit-scrollbar-thumb {
    background-color: #22d3ee; /* Color del pulgar (cyan-400) */
    border-radius: 4px;
    }
    
    .elegant-scroll::-webkit-scrollbar-thumb:hover {
    background-color: #67e8f9; /* Color del pulgar al pasar el mouse (cyan-300) */
    }
`}</style>
);


function FullScreenMenu({ onClose }) {
    
// Estado para el desplegable MÓVIL Y TABLET
const [isServicesOpen, setIsServicesOpen] = useState(false);

// Estado para el desplegable de ESCRITORIO
const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);

useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
    document.body.style.overflow = originalOverflow;
    };
}, []); 

return (
    <>
    <ScrollbarStyles />
    
    <div className="fixed inset-0 z-[100] p-8 bg-dark-bg bg-opacity-95 backdrop-blur-sm text-white animate-menuFadeIn overflow-y-auto elegant-scroll">
        
        {/* 1. Cabecera (Sin cambios) */}
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-white block">Aliia Tech</span>
        <button onClick={onClose} className="text-white hover:text-cyan-400 transition-all duration-300 hover:rotate-90" aria-label="Cerrar menú">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
        </div>

        {/* 2. Contenido del Menú */}
        <div className="py-12">
        {/* --- CAMBIO 1: Rejilla de 3 etapas ---
            - Móvil: grid-cols-1
            - Tablet: md:grid-cols-2
            - Desktop: xl:grid-cols-2 (cerrado) o xl:grid-cols-3 (abierto)
        */}
        <div className={`container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 ${isDesktopServicesOpen ? 'xl:grid-cols-3' : 'xl:grid-cols-2'} gap-y-4 md:gap-10`}>
            
            {/* --- COLUMNA 1: NAVEGACIÓN PRINCIPAL --- */}
            <div>
            <NavLink to="/" onClick={onClose} className={`${mainNavLinkClass} ${mainNavLinkHoverEffect}`}>Inicio</NavLink>
            
            {/* --- CAMBIO 2: Botón para MÓVIL y TABLET --- */}
            {/* Se muestra en (sm, md, lg) y se oculta en xl */}
            <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`${mainNavLinkClass} ${mainNavLinkHoverEffect} xl:hidden flex justify-between items-center w-full`}
            >
                <span>Servicios</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                    className={`w-8 h-8 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            
            {/* --- CAMBIO 3: Botón para DESKTOP (XL) --- */}
            {/* Se oculta en (sm, md, lg) y se muestra en xl */}
            <button 
                onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
                className={`${mainNavLinkClass} ${mainNavLinkHoverEffect} hidden xl:flex justify-between items-center w-fit gap-2`}
            >
                <span>Servicios</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                    className={`w-6 h-6 transition-transform duration-300 ${isDesktopServicesOpen ? 'rotate-180' : 'rotate-0'}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            
            {/* --- CAMBIO 4: Pilares (Versión MÓVIL y TABLET) --- */}
            {/* Se oculta solo en xl. Controlado por isServicesOpen */}
            <div className={`mt-4 pl-4 border-l-2 border-cyan-400/50 space-y-8 
                                ${isServicesOpen ? 'block' : 'hidden'} xl:hidden`}
            >
                {/* Todos los 4 pilares se apilan aquí */}
                <div className="group">
                    <span className={pillarTitleClass}>Web y E-commerce</span>
                    <div className="w-1/4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4 group-hover:w-12 transition-all duration-300"></div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <Link to="/servicios/diseno-tiendas-online" onClick={onClose} className={subLinkClass}>Diseño de Tiendas Online</Link>
                        <Link to="/servicios/desarrollo-apps-moviles" onClick={onClose} className={subLinkClass}>Aplicaciones Móviles</Link>
                    </div>
                </div>
                <div className="group">
                    <span className={pillarTitleClass}>Sistemas y Automatización</span>
                    <div className="w-1/4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4 group-hover:w-1/2 transition-all duration-300"></div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <Link to="/servicios/sistemas-erp-crm" onClick={onClose} className={subLinkClass}>Software Empresarial (ERP/CRM)</Link>
                        <Link to="/servicios/sistemas-logistica-sunat" onClick={onClose} className={subLinkClass}>Sistemas de Logística (SUNAT)</Link>
                        <Link to="/servicios/soluciones-ia" onClick={onClose} className={subLinkClass}>Soluciones con IA</Link>
                        <Link to="/servicios/sistemas-automatizacion" onClick={onClose} className={subLinkClass}>Chatbots y Automatización</Link>
                        <Link to="/servicios/sistemas-mesa-ayuda" onClick={onClose} className={subLinkClass}>Sistemas de Mesa de Ayuda</Link>
                        <Link to="/servicios/servicios-cloud" onClick={onClose} className={subLinkClass}>Servicios Cloud (AWS/Azure)</Link>
                    </div>
                </div>
                <div className="group">
                    <span className={pillarTitleClass}>Marketing y Estrategia</span>
                    <div className="w-1/4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4 group-hover:w-1/2 transition-all duration-300"></div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <Link to="/servicios/analisis-power-bi" onClick={onClose} className={subLinkClass}>Análisis de Ventas (Power BI)</Link>
                        <Link to="/servicios/marketing-conversacional" onClick={onClose} className={subLinkClass}>Marketing Conversacional</Link>
                        <Link to="/servicios/auditoria-seguridad" onClick={onClose} className={subLinkClass}>Auditoría de Seguridad</Link>
                        <Link to="/servicios/consultoria-negocios" onClick={onClose} className={subLinkClass}>Consultoría de Negocios</Link>
                        <Link to="/servicios/capacitacion-microsoft" onClick={onClose} className={subLinkClass}>Capacitación Microsoft</Link>
                    </div>
                </div>
                <div className="group">
                    <span className={pillarTitleClass}>Soluciones por Industria</span>
                    <div className="w-1/4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4 group-hover:w-1/2 transition-all duration-300"></div>
                    <div className="flex flex-col space-y-2 mt-4">
                        <Link to="/servicios/soluciones-turismo" onClick={onClose} className={subLinkClass}>Turismo y Hoteles</Link>
                        <Link to="/servicios/soluciones-constructoras" onClick={onClose} className={subLinkClass}>Constructoras e Inmobiliarias</Link>
                        <Link to="/servicios/soluciones-educacion" onClick={onClose} className={subLinkClass}>Educación (Certificados)</Link>
                        <Link to="/servicios/diseno-interiores" onClick={onClose} className={subLinkClass}>Diseño de Interiores</Link>
                    </div>
                </div>
            </div>

            {/* --- CAMBIO 5: Pilares (Versión DESKTOP - Col 1) --- */}
            {/* Se oculta por defecto, se muestra en XL si está abierto */}
            <div className={`mt-4 pl-4 border-l-2 border-cyan-400/50 space-y-8 
                                ${isDesktopServicesOpen ? 'hidden xl:block' : 'hidden'}`}
            >
                <div className="group">
                <span className={pillarTitleClass}>Web y E-commerce</span>
                <div className="w-1/4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4 group-hover:w-12 transition-all duration-300"></div>
                <div className="flex flex-col space-y-2 mt-4">
                    <Link to="/servicios/diseno-tiendas-online" onClick={onClose} className={subLinkClass}>Diseño de Tiendas Online</Link>
                    <Link to="/servicios/desarrollo-apps-moviles" onClick={onClose} className={subLinkClass}>Aplicaciones Móviles</Link>
                </div>
                </div>
                
                <div className="group">
                <span className={pillarTitleClass}>Sistemas y Automatización</span>
                <div className="w-1/4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4 group-hover:w-1/2 transition-all duration-300"></div>
                <div className="flex flex-col space-y-2 mt-4">
                    <Link to="/servicios/sistemas-erp-crm" onClick={onClose} className={subLinkClass}>Software Empresarial (ERP/CRM)</Link>
                    <Link to="/servicios/sistemas-logistica-sunat" onClick={onClose} className={subLinkClass}>Sistemas de Logística (SUNAT)</Link>
                    <Link to="/servicios/soluciones-ia" onClick={onClose} className={subLinkClass}>Soluciones con IA</Link>
                    <Link to="/servicios/sistemas-automatizacion" onClick={onClose} className={subLinkClass}>Chatbots y Automatización</Link>
                    <Link to="/servicios/sistemas-mesa-ayuda" onClick={onClose} className={subLinkClass}>Sistemas de Mesa de Ayuda</Link>
                    <Link to="/servicios/servicios-cloud" onClick={onClose} className={subLinkClass}>Servicios Cloud (AWS/Azure)</Link>
                </div>
                </div>
            </div>
            
            {/* --- CAMBIO 6: Nosotros/Blog --- */}
            {/* Se muestra siempre, pero se oculta en XL si el menú de servicios está abierto */}
            {/* AHORA TAMBIÉN SE OCULTA EN MD SI isServicesOpen ES TRUE */}
            <div className={`flex flex-col space-y-4 mb-10 ${isDesktopServicesOpen ? 'xl:hidden' : 'block'} ${isServicesOpen ? 'md:hidden' : 'md:block'}`}>
                <NavLink to="/nosotros" onClick={onClose} className={`${mainNavLinkClass} ${mainNavLinkHoverEffect}`}>Nosotros</NavLink>
                <NavLink to="/blog" onClick={onClose} className={`${mainNavLinkClass} ${mainNavLinkHoverEffect}`}>Blog</NavLink>
            </div>
            </div>


            {/* --- COLUMNA 2 (Condicional) --- */}
            
            {/* --- CAMBIO 7: Versión ABIERTA (Pilares 3 y 4) --- */}
            {/* Se oculta por defecto, se muestra en XL si está abierto */}
            <div className={`space-y-8 md:pt-0 xl:pt-[119px] ${isDesktopServicesOpen ? 'hidden xl:block' : 'hidden'}`}>
                <div className="space-y-8 pl-4 border-l-2 border-cyan-400/50">
                    <div className="group">
                        <span className={pillarTitleClass}>Marketing y Estrategia</span>
                        <div className="w-1/4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4 group-hover:w-1/2 transition-all duration-300"></div>
                        <div className="flex flex-col space-y-2 mt-4">
                        <Link to="/servicios/analisis-power-bi" onClick={onClose} className={subLinkClass}>Análisis de Ventas (Power BI)</Link>
                        <Link to="/servicios/marketing-conversacional" onClick={onClose} className={subLinkClass}>Marketing Conversacional</Link>
                        <Link to="/servicios/auditoria-seguridad" onClick={onClose} className={subLinkClass}>Auditoría de Seguridad</Link>
                        <Link to="/servicios/consultoria-negocios" onClick={onClose} className={subLinkClass}>Consultoría de Negocios</Link>
                        <Link to="/servicios/capacitacion-microsoft" onClick={onClose} className={subLinkClass}>Capacitación Microsoft</Link>
                        </div>
                    </div>
                    
                    <div className="group">
                        <span className={pillarTitleClass}>Soluciones por Industria</span>
                        <div className="w-1/4 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4 group-hover:w-1/2 transition-all duration-300"></div>
                        <div className="flex flex-col space-y-2 mt-4">
                        <Link to="/servicios/soluciones-turismo" onClick={onClose} className={subLinkClass}>Turismo y Hoteles</Link>
                        <Link to="/servicios/soluciones-constructoras" onClick={onClose} className={subLinkClass}>Constructoras e Inmobiliarias</Link>
                        <Link to="/servicios/soluciones-educacion" onClick={onClose} className={subLinkClass}>Educación (Certificados)</Link>
                        <Link to="/servicios/diseno-interiores" onClick={onClose} className={subLinkClass}>Diseño de Interiores</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- CAMBIO 8: Versión CERRADA (Contacto Info) --- */}
            {/* Se muestra en (sm, md, lg) y en (xl cerrado). Se oculta en (xl abierto) */}
            <div className={`${isDesktopServicesOpen ? 'xl:hidden' : 'block'}`}>
            
                {/* --- BLOQUE INSERTADO: Solo visible en tablet (md) cuando servicios está abierto --- */}
                <div className={`flex flex-col space-y-4 mb-10 hidden ${isServicesOpen ? 'md:block' : 'md:hidden'} xl:hidden`}>
                    <NavLink to="/nosotros" onClick={onClose} className={`${mainNavLinkClass} ${mainNavLinkHoverEffect}`}>Nosotros</NavLink>
                    <NavLink to="/blog" onClick={onClose} className={`${mainNavLinkClass} ${mainNavLinkHoverEffect}`}>Blog</NavLink>
                </div>
                {/* --- FIN DEL BLOQUE INSERTADO --- */}

                <NavLink 
                    to="/contacto" 
                    onClick={onClose} 
                    className="inline-block text-xl font-semibold border-2 border-cyan-400 rounded-full px-12 py-3 text-cyan-400 hover:bg-cyan-400 hover:text-dark-bg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                    >
                    Contáctanos
                </NavLink>

                {/* (Bloque de contacto con íconos corregidos) */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="flex flex-col space-y-4 mb-6">
                    
                    <a href="https://www.google.com/maps/place/Alameda+Costa+Nte.+539,+Lima+15067/@-12.2210219,-76.9952504,1090m/data=!3m1!1e3!4m6!3m5!1s0x9105ba1c2b76f66b:0x25c9768b87262658!8m2!3d-12.2210727!4d-76.9933999!16s%2Fg%2F11lq2jmt9w?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={`flex items-start ${contactTextClass}`}>
                        <div className="flex-shrink-0">
                            <MapPinIcon />
                        </div>
                        <span>Alameda Costa Norte 539</span>
                    </a>

                    <a href="tel:+51987654321" className={`flex items-start ${contactTextClass}`}>
                        <div className="flex-shrink-0">
                            <PhoneIcon />
                        </div>
                        <span>(+51) 987654321</span>
                    </a>

                    <a href="mailto:info@aliiatech.com" className={`flex items-start ${contactTextClass}`}>
                        <div className="flex-shrink-0">
                            <EmailIcon />
                        </div>
                        <span>info@aliiatech.com</span>
                    </a>

                    </div>

                    <div className="flex space-x-6 mt-8">
                    <a href="httpsas://facebook.com/TU_USUARIO" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <FacebookIcon />
                    </a>
                    <a href="https://instagram.com/TU_USUARIO" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <InstagramIcon />
                    </a>
                    <a href="https://linkedin.com/in/TU_USUARIO" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <LinkedInIcon />
                    </a>
                    </div>
                </div>
            </div>


            {/* --- CAMBIO 9: COLUMNA 3 (Versión ABIERTA) --- */}
            {/* Solo se muestra en XL si está abierto */}
            <div className={`${isDesktopServicesOpen ? 'hidden xl:block' : 'hidden'}`}>
                <div className="flex flex-col space-y-4 mb-10">
                    <NavLink to="/nosotros" onClick={onClose} className={`${mainNavLinkClass} ${mainNavLinkHoverEffect}`}>Nosotros</NavLink>
                    <NavLink to="/blog" onClick={onClose} className={`${mainNavLinkClass} ${mainNavLinkHoverEffect}`}>Blog</NavLink>
                </div>

                <NavLink 
                    to="/contacto" 
                    onClick={onClose} 
                    className="inline-block text-xl font-semibold border-2 border-cyan-400 rounded-full px-12 py-3 text-cyan-400 hover:bg-cyan-400 hover:text-dark-bg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                    Contáctanos
                </NavLink>

                {/* (Bloque de contacto con íconos corregidos) */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="flex flex-col space-y-4 mb-6">
                    
                    <a href="https://www.google.com/maps/place/Alameda+Costa+Nte.+539,+Lima+15067/@-12.2210219,-76.9952504,1090m/data=!3m1!1e3!4m6!3m5!1s0x9105ba1c2b76f66b:0x25c9768b87262658!8m2!3d-12.2210727!4d-76.9933999!16s%2Fg%2F11lq2jmt9w?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={`flex items-start ${contactTextClass}`}>
                        <div className="flex-shrink-0">
                            <MapPinIcon />
                        </div>
                        <span>Alameda Costa Norte 539</span>
                    </a>

                    <a href="tel:+51969980152" className={`flex items-start ${contactTextClass}`}>
                        <div className="flex-shrink-0">
                            <PhoneIcon />
                        </div>
                        <span>(+51) 969 980 152</span>
                    </a>

                    <a href="mailto:info@aliiatech.com" className={`flex items-start ${contactTextClass}`}>
                        <div className="flex-shrink-0">
                            <EmailIcon />
                        </div>
                        <span>info@aliiatech.com</span>
                    </a>

                    </div>

                    <div className="flex space-x-6 mt-8">
                    <a href="httpsas://facebook.com/TU_USUARIO" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <FacebookIcon />
                    </a>
                    <a href="https://instagram.com/TU_USUARIO" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <InstagramIcon />
                    </a>
                    <a href="https://linkedin.com/in/TU_USUARIO" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <LinkedInIcon />
                    </a>
                    </div>
                </div>
            </div>

        </div>
        </div>
        
    </div>
    </>
);
}

export default FullScreenMenu;