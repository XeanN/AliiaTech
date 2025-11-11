import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
// 1. Importamos el menú de pantalla completa
import FullScreenMenu from './FullScreenMenu.jsx';

// --- 1. ¡IMPORTA TU IMAGEN DE LOGO AQUÍ! ---
// (Asegúrate de que la ruta a tu logo sea correcta)
import logoImage from '/Aliia-tech.png';

function Navbar() {
  // Estado para saber si se ha hecho scroll
  const [scrolled, setScrolled] = useState(false);
  // Estado para abrir/cerrar el menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lógica para el scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Clases para los enlaces de texto (cuando están visibles)
  const linkClass = ({ isActive }) => {
    const baseStyle = 'py-2 px-3 rounded-lg transition-colors duration-300';
    // Siempre son blancos, porque solo se ven sobre la imagen
    return isActive 
      ? `${baseStyle} text-white font-bold bg-white bg-opacity-20` 
      : `${baseStyle} text-white hover:bg-white hover:bg-opacity-20`;
  };

  return (
    <> 
      {/* --- 1. BARRA DE NAVEGACIÓN PRINCIPAL --- */}
      {/* Esta barra ahora se OCULTA al hacer scroll */}
      <nav 
        className={`fixed top-0 left-0 w-full z-40 transition-opacity duration-300 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* --- ¡ESTO ES LA IMAGEN! --- */}
          <Link to="/" className="block"> {/* 'block' es bueno para un enlace de imagen */}
            <img 
              src={logoImage} 
              alt="Logo Aliia Tech"
              className="h-8 w-auto" // <-- ¡Ajusta esta altura! h-8 = 32px.
            />
          </Link>
    
          {/* Menú de Escritorio (Enlaces de texto) */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={linkClass}>Inicio</NavLink>
            <NavLink to="/servicios" className={linkClass}>Servicios</NavLink>
            <NavLink to="/nosotros" className={linkClass}>Nosotros</NavLink>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <Link 
              to="/contacto" 
              className="ml-4 px-5 py-2 rounded-lg font-semibold text-primary bg-white hover:bg-gray-100 shadow transition"
            >
              Contacto
            </Link>
          </div>
          
          {/* Menú Móvil (Hamburguesa) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="focus:outline-none text-white"
              aria-label="Abrir menú"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* --- 2. BOTÓN DE HAMBURGUESA FLOTANTE --- */}
      {/* ¡AQUÍ ESTÁ LA CORRECCIÓN! */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        aria-label="Abrir menú"
        // ¡Cambiamos a fondo blanco (bg-white) y texto oscuro (text-dark-bg)!
        className={`fixed top-6 right-6 z-50 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-dark-bg transition-all duration-300 ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* --- 3. EL MENÚ DE PANTALLA COMPLETA --- */}
      {/* Se muestra si 'isMenuOpen' es true */}
      {isMenuOpen && <FullScreenMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}

export default Navbar;