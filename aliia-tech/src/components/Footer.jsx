// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Iconos (los definimos aquí para reusarlos)
const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);
const XIcon = () => ( // Icono de X (Twitter)
  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.512 11.24h-6.617l-5.36-7.009-6.376 7.009h-3.308l7.748-8.998L2.25 2.25h6.778l4.723 6.274L18.244 2.25zM16.94 20.25h1.56l-6.8-9.06L5.3 4h-1.66l6.9 9.06L16.94 20.25z" />
  </svg>
);

function Footer() {
  return (
    // ¡CAMBIO DE COLOR! De bg-gray-800 a bg-slate-900 (más oscuro)
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Columna 1: Logo e Info */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white">
              Aliia Tech
            </Link>
            <p className="mt-4 text-slate-400">
              Transformamos negocios con tecnología e innovación.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition">
                <LinkedInIcon />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                <XIcon />
              </a>
              {/* Añade más redes si quieres */}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase">Navegación</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/nosotros" className="hover:text-white transition">Nosotros</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition">Servicios</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase">Servicios</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/servicios/sistemas-y-cloud" className="hover:text-white transition">Sistemas y Cloud</Link></li>
              <li><Link to="/servicios/web-y-ecommerce" className="hover:text-white transition">Web & E-commerce</Link></li>
              <li><Link to="/servicios/consultoria-e-innovacion" className="hover:text-white transition">Consultoría</Link></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase">Contacto</h3>
            <ul className="mt-4 space-y-2 text-slate-400">
              <li>contacto@aliiia.tech</li>
              <li>+51 969 980 152</li>
              <li>Lima, Perú</li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aliia Tech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;