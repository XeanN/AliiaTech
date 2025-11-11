import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useLayoutEffect, useEffect } from 'react';
import AOS from 'aos';

// Componentes
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

// Páginas
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx"; 
import About from "../pages/About.jsx";
import Blog from "../pages/Blog.jsx";
import Contact from "../pages/Contact.jsx";
import ServiceDetail from "../pages/ServiceDetail.jsx";
import BlogDetail from "../pages/BlogDetail.jsx"; 

// Helper para scroll-to-top y refrescar AOS
const Wrapper = ({children}) => {
  const location = useLocation();
  
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Refresca AOS después de que el DOM se actualice
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return children;
}

function AppRouter() {
  useEffect(() => {
    // Inicializa AOS
    AOS.init({
      duration: 700,
      once: true,
      offset: 100,
      disable: false,
    });
  }, []);

  return (
    <Router>
      <Wrapper>
        <div className="relative min-h-screen group">
    
          {/* <-- FONDO GLOBAL FIJO --- */}
          <div className="fixed top-0 left-0 w-full h-screen"> {/* ¡CAMBIO! Quitamos z-0 de aquí */}
            
            {/* Capa 0: Imagen (fondo) */}
            <img
              src="/fondito.jpg"
              alt="Fondo de circuito"
              className="absolute top-0 left-0 w-full h-full object-cover z-0" 
            />
            
            {/* Capa 1: Video (encima) */}
            <video
              autoPlay
              loop
              muted
              playsInline
              // ¡CAMBIO! Mantenemos tu z-10
              className="absolute top-0 left-0 w-full h-full object-cover z-10 opacity-90"
            >
              <source src="/videito.mp4" type="video/mp4" />
            </video>

          </div>
          {/* <-- FIN DEL FONDO GLOBAL --- */}

          {/* --- ¡AQUÍ ESTÁ LA CAPITA! (EL ARREGLO) --- */}
          {/* Capa 2: Tinte oscuro para legibilidad (z-20) */}
          <div 
            className="fixed inset-0 z-20 bg-black opacity-60" 
            aria-hidden="true" 
          />
          {/* --- FIN DE LA CAPITA --- */}


          {/* <-- CONTENIDO PRINCIPAL: ¡CAMBIO! Sube a z-30 --> */}
          <div className="relative z-30"> 
            <Navbar />
            <WhatsAppButton />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Services />} />
            	<Route path="/nosotros" element={<About />} />
          	  <Route path="/blog" element={<Blog />} />
          	  <Route path="/contacto" element={<Contact />} />
          	  <Route path="/servicios/:serviceSlug" element={<ServiceDetail />} />
          	  <Route path="/blog/:postSlug" element={<BlogDetail />} /> 
          	</Routes>
          	<Footer />
        	</div>
        	{/* <-- FIN DEL CONTENIDO PRINCIPAL --- */}

      	</div>
      </Wrapper>
    </Router>
  );
}

export default AppRouter;