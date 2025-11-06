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
    // Inicializa AOS cuando el componente se monte
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
      </Wrapper>
    </Router>
  );
}

export default AppRouter;