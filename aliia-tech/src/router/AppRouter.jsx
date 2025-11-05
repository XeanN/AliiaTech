import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useLayoutEffect } from 'react';
import AOS from 'aos'; // Importamos AOS

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
import ServiceDetail from "../pages/ServiceDetail.jsx"; // ¡La plantilla de 8 pasos!
import BlogDetail from "../pages/BlogDetail.jsx"; 

// Helper para scroll-to-top y refrescar AOS
const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
    AOS.refresh(); 
  }, [location.pathname]);
  return children
}

function AppRouter() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <WhatsAppButton />
        <Routes>
          {/* Rutas Estáticas */}
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />

          {/* Rutas Dinámicas (¡Corregidas!) */}
          <Route path="/servicios/:serviceSlug" element={<ServiceDetail />} />
          <Route path="/blog/:postSlug" element={<BlogDetail />} /> 
        
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default AppRouter;