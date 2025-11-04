import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useLayoutEffect } from 'react';

// Componentes
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

// Páginas Estáticas
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx"; 
import About from "../pages/About.jsx";
import Blog from "../pages/Blog.jsx";
import Contact from "../pages/Contact.jsx";

// --- ¡NUEVA PÁGINA DE PLANTILLA! ---
import ServiceDetail from "../pages/ServiceDetail.jsx";

// Helper para que la página suba al inicio en cada cambio de ruta
const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function AppRouter() {
  return (
    <Router>
      <Wrapper> {/* Envuelve todo para el scroll-to-top */}
        <Navbar />
        <WhatsAppButton />
        <Routes>
          {/* Rutas antiguas */}
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />

          {/* --- ¡NUEVA RUTA DINÁMICA! --- */}
          {/* (Esta es la versión corregida, sin el .jsx adentro) */}
          <Route path="/servicios/:serviceSlug" element={<ServiceDetail />} />
        
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default AppRouter;