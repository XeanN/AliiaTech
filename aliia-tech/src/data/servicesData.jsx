    import React from 'react';

    // --- Iconos (Los definimos aquí) ---
    const SistemasIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.375 1.518c-.207.375-.465.722-.777 1.018a3.75 3.75 0 0 1-5.696 0 3.75 3.75 0 0 1 0-5.696c.375-.207.722-.465 1.018-.777 1.518-.375 1.007-.375 1.007-.375h1.5M13.5 1.5v1.007a3 3 0 0 0 .375 1.518c.207.375.465.722.777 1.018a3.75 3.75 0 0 0 5.696 0 3.75 3.75 0 0 0 0-5.696c-.375-.207-.722-.465-1.018-.777A3 3 0 0 0 19.5 1.5h-1.5m-6 6v1.007a3 3 0 0 1-.375 1.518c-.207.375-.465.722-.777 1.018a3.75 3.75 0 0 1-5.696 0 3.75 3.75 0 0 1 0-5.696c.375-.207.722-.465 1.018-.777A3 3 0 0 1 7.5 7.5h1.5m6 6v1.007a3 3 0 0 0 .375 1.518c.207.375.465.722.777 1.018a3.75 3.75 0 0 0 5.696 0 3.75 3.75 0 0 0 0-5.696c-.375-.207-.722-.465-1.018-.777A3 3 0 0 0 19.5 13.5h-1.5" />
    </svg>
    );
    const WebIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.18.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.299l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.299-.21l.775-.387 1.64 1.64A6 6 0 0 0 18.384 21H19.5a1.5 1.5 0 0 0 1.5-1.5v-1.5c0-.433-.132-.845-.384-1.187l-1.64-1.64.775-.387c.342-.17.433-.56.21-1.299l-1.348-1.348c-.21-.21-.497-.329-.795-.329v-1.089c0-.426-.24-.815-.622-1.006l-.153-.076c-.433-.217-.956-.132-1.299.21l-.387.775-1.64-1.64A6 6 0 0 0 4.616 3H3.5a1.5 1.5 0 0 0-1.5 1.5v1.5c0 .433.132.845.384 1.187l1.64 1.64Z" />
    </svg>
    );
    const ConsultIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </svg>
    );

    // --- Datos (Tu contenido) ---

    export const servicesData = {
    // --- Categoría 1 ---
    "sistemas-y-cloud": {
        id: 1,
        slug: "sistemas-y-cloud",
        category: "Sistemas y Cloud",
        icon: <SistemasIcon />,
        title: "Sistemas Empresariales y Servicios en la Nube",
        longDescription: "Nos especializamos en la creación de soluciones de software robustas y escalables. Desde sistemas logísticos integrados con SUNAT hasta aplicaciones móviles nativas (Android/iOS), nuestro equipo transforma tus procesos manuales en flujos de trabajo digitales eficientes. Ofrecemos servicios completos en la nube, incluyendo administración de AWS, backups seguros e infraestructura escalable.",
        features: [
        "Desarrollo de sistemas empresariales y logísticos (integrados con SUNAT)",
        "Aplicaciones móviles personalizadas (Android / iOS)",
        "Servicios en la nube (AWS, backups, infraestructura)",
        "Automatizaciones con Inteligencia Artificial",
        "Sistemas de mesa de ayuda y soporte técnico",
        "Generadores automáticos de certificados educativos"
        ],
        imageUrl: "https://placehold.co/1200x600/0284c7/white?text=Sistemas+y+Cloud"
    },

    // --- Categoría 2 ---
    "web-y-ecommerce": {
        id: 2,
        slug: "web-y-ecommerce",
        category: "Web, E-commerce & Marketing",
        icon: <WebIcon />,
        title: "Desarrollo Web, E-commerce y Marketing Digital",
        longDescription: "Tu presencia en línea es tu carta de presentación. Creamos plataformas de E-commerce modernas y sitios web optimizados para agencias de turismo, hoteles y constructoras. Integramos sistemas de reservas, chatbots inteligentes y potenciamos tu visibilidad con estrategias de marketing digital conversacional (Facebook, Instagram, WhatsApp) y posicionamiento SEO profesional.",
        features: [
        "Tiendas online y plataformas E-commerce modernas",
        "Websites para agencias de turismo, hoteles y constructoras",
        "Sistemas de reservas y chatbots inteligentes",
        "Marketing digital conversacional (Facebook, Instagram, WhatsApp)",
        "SEO y posicionamiento web profesional"
        ],
        imageUrl: "https://placehold.co/1200x600/0d9488/white?text=Web+y+Marketing"
    },
    
    // --- Categoría 3 ---
    "consultoria-e-innovacion": {
        id: 3,
        slug: "consultoria-e-innovacion",
        category: "Consultoría e Innovación",
        icon: <ConsultIcon />,
        title: "Consultoría en Transformación Digital e Innovación",
        longDescription: "Guiamos a tu empresa en el camino hacia la modernización. Ofrecemos consultoría experta en transformación digital, especializándonos en herramientas como Microsoft 365, Excel y Power BI para la toma de decisiones. Además, proveemos análisis de seguridad informática, ciberprotección y servicios innovadores como diseño de interiores y renderización arquitectónica.",
        features: [
        "Transformación digital (Microsoft, Excel, Power BI)",
        "Asesoría para formalizar y optimizar tu empresa",
        "Análisis de seguridad informática y ciberprotección",
        "Diseño de interiores y renderización arquitectónica"
        ],
        imageUrl: "https://placehold.co/1200x600/7c3aed/white?text=Consultor%C3%ADa"
    }
    };

    // Exportamos un array de los servicios para iterar fácilmente
    export const servicesArray = Object.values(servicesData);