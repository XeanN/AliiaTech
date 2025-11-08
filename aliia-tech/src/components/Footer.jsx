import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '/Aliia-tech.png';

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
    // Usamos el fondo oscuro 'dark-bg' de nuestro config
    <footer className="bg-dark-bg text-text-muted border-t border-gray-700">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Columna 1: Logo e Info */}
          <div>
            <Link to="/" className="block"> {/* 'block' es bueno para un enlace de imagen */}
                <img 
                src={logoImage} 
                alt="Logo Aliia Tech"
                className="h-8 w-auto" // <-- ¡Ajusta esta altura! h-8 = 32px.
                />
            </Link>
            <p className="mt-4 text-text-muted">
              Transformamos negocios con tecnología e innovación.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-text-muted hover:text-white transition">
                <LinkedInIcon />
              </a>
              <a href="#" className="text-text-muted hover:text-white transition">
                <XIcon />
              </a>
              {/* Añade más redes si quieres */}
            </div>
          </div>

          {/* Columna 2: ¡PILARES 1 y 4 ACTUALIZADOS! */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Web e Industrias</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/servicios/diseno-tiendas-online" className="hover:text-white transition">Tiendas Online</Link></li>
              <li><Link to="/servicios/desarrollo-apps-moviles" className="hover:text-white transition">Aplicaciones Móviles</Link></li>
              <li className="pt-2"><Link to="/servicios/soluciones-turismo" className="hover:text-white transition">Turismo y Hoteles</Link></li>
              <li><Link to="/servicios/soluciones-constructoras" className="hover:text-white transition">Constructoras</Link></li>
              <li><Link to="/servicios/soluciones-educacion" className="hover:text-white transition">Educación</Link></li>
              <li><Link to="/servicios/diseno-interiores" className="hover:text-white transition">Diseño de Interiores</Link></li>
            </ul>
          </div>

          {/* Columna 3: ¡PILARES 2 y 3 ACTUALIZADOS! */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Sistemas y Estrategia</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/servicios/sistemas-logistica-sunat" className="hover:text-white transition">Logística y SUNAT</Link></li>
              <li><Link to="/servicios/sistemas-erp-crm" className="hover:text-white transition">Sistemas ERP/CRM</Link></li>
              <li><Link to="/servicios/soluciones-ia" className="hover:text-white transition">Soluciones con IA</Link></li>
              <li><Link to="/servicios/servicios-cloud" className="hover:text-white transition">Servicios Cloud</Link></li>
              <li><Link to="/servicios/analisis-power-bi" className="hover:text-white transition">Análisis (Power BI)</Link></li>
              <li><Link to="/servicios/auditoria-seguridad" className="hover:text-white transition">Auditoría de Seguridad</Link></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Contacto</h3>
            <ul className="mt-4 space-y-2 text-text-muted">
              <li>info@aliiatech.com </li>
              <li>+51 969 980 152</li>
              <li>Lima, Perú</li>
              <li className="pt-4">
                <Link to="/contacto" className="font-bold text-accent-start hover:text-white transition">
                  Envíanos un mensaje →
                </Link>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-text-muted">
          <p>&copy; {new Date().getFullYear()} Aliia Tech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;