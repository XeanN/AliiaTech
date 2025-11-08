    import React from 'react';

    // --- Iconos (Los definimos aquí) ---
    const PilarIconWeb = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent-start">
        <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.18.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.299l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.299-.21l.775-.387 1.64 1.64A6 6 0 0 0 18.384 21H19.5a1.5 1.5 0 0 0 1.5-1.5v-1.5c0-.433-.132-.845-.384-1.187l-1.64-1.64.775-.387c.342-.17.433-.56.21-1.299l-1.348-1.348c-.21-.21-.497-.329-.795-.329v-1.089c0-.426-.24-.815-.622-1.006l-.153-.076c-.433-.217-.956-.132-1.299.21l-.387.775-1.64-1.64A6 6 0 0 0 4.616 3H3.5a1.5 1.5 0 0 0-1.5 1.5v1.5c0 .433.132.845.384 1.187l1.64 1.64Z" />
    </svg>
    );
    const PilarIconSistemas = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent-start">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.375 1.518c-.207.375-.465.722-.777 1.018a3.75 3.75 0 0 1-5.696 0 3.75 3.75 0 0 1 0-5.696c.375-.207.722-.465 1.018-.777 1.518-.375 1.007-.375 1.007-.375h1.5M13.5 1.5v1.007a3 3 0 0 0 .375 1.518c.207.375.465.722.777 1.018a3.75 3.75 0 0 0 5.696 0 3.75 3.75 0 0 0 0-5.696c-.375-.207-.722-.465-1.018-.777A3 3 0 0 0 19.5 1.5h-1.5m-6 6v1.007a3 3 0 0 1-.375 1.518c-.207.375-.465.722-.777 1.018a3.75 3.75 0 0 1-5.696 0 3.75 3.75 0 0 1 0-5.696c.375-.207.722-.465 1.018-.777A3 3 0 0 1 7.5 7.5h1.5m6 6v1.007a3 3 0 0 0 .375 1.518c.207.375.465.722.777 1.018a3.75 3.75 0 0 0 5.696 0 3.75 3.75 0 0 0 0-5.696c-.375-.207-.722-.465-1.018-.777A3 3 0 0 0 19.5 13.5h-1.5" />
    </svg>
    );
    const PilarIconMarketing = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent-start">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </svg>
    );
    const PilarIconIndustria = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent-start">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21v-4.5m0 4.5h-2.25m2.25 0h2.25m0 0v-4.5m0 4.5h2.25M12 21v-4.5m0 4.5h-2.25m2.25 0h2.25m0 0v-4.5m0 4.5h2.25M20.25 21v-4.5M12 3v2.25m6.364.364.707.707M21 12h-2.25m-.364 6.364-.707.707M12 21V12m0 0H4.5m7.5 0h7.5M12 12V3m0 0v2.25m-6.364.364-.707.707M3 12h2.25m.364 6.364.707.707" />
        </svg>
    );

    // --- Contenido de 8 Pasos (Redactado) ---
    const blueprint_ecommerce = {
    heroTitle: "Vende Más. Gestiona Menos. Creamos tu Tienda Online a Medida.",
    problem: "¿Tus ventas online están estancadas? ¿Tu plataforma actual es lenta, difícil de gestionar y no se conecta con tu inventario, obligándote a hacer doble trabajo? Estás perdiendo clientes por un carrito de compras complicado y una experiencia de pago insegura.",
    solution: "AliiaTech no solo 'diseña' tu tienda; construimos tu motor de ventas digital. Desarrollamos plataformas E-commerce robustas, rápidas y 100% integradas con tus sistemas de pago y logística. Desde el UX/UI que enamora a tus clientes hasta la integración con pasarelas de pago (Niubiz, Culqi, Izipay), te entregamos una tienda lista para vender.",
    features: ["Diseño UX/UI Centrado en la Conversión (CRO)", "Integración con todas las Pasarelas de Pago", "Optimización SEO para E-commerce", "Diseño 100% Responsivo (Móvil, Tablet, PC)", "Capacitación y Carga Inicial de Productos", "Conexión con tu ERP o Sistema de Inventario"],
    process: [
        { title: "1. Análisis de Negocio", description: "Estudiamos tu competencia y tu público objetivo." },
        { title: "2. Diseño y Prototipado UX/UI", description: "Creamos un diseño enfocado en la conversión." },
        { title: "3. Desarrollo e Integración", description: "Construimos la tienda e integramos las pasarelas de pago." },
        { title: "4. Pruebas y Lanzamiento", description: "Aseguramos que tu tienda sea rápida y segura." }
    ],
    tech: ["Shopify", "WooCommerce", "Magento", "React", "Node.js"],
    socialProof: {
        quote: "Migramos nuestra tienda con AliiaTech y las ventas aumentaron un 40% en 3 meses. El nuevo sistema nos ahorra 10 horas de trabajo a la semana.",
        author: "Gerente de E-commerce",
        company: "Tienda ABC"
    },
    cta: "Solicita tu Auditoría E-commerce Gratuita"
    };

    const blueprint_logistica = {
    heroTitle: "Automatice su Logística y Cumpla con SUNAT sin Esfuerzo.",
    problem: "¿Pierde tiempo valioso en la generación manual de guías de remisión? ¿Los errores de inventario afectan sus ventas y la falta de cumplimiento con SUNAT le genera riesgos de auditoría?",
    solution: "AliiaTech desarrolla un Sistema de Logística y Gestión a medida que se integra perfectamente con sus operaciones. Automatizamos sus procesos de compra y venta y conectamos su facturación directamente a los servicios web de SUNAT, eliminando el error humano y dándole visibilidad total de su cadena de suministro.",
    features: ["Módulo de Compras y Proveedores", "Módulo de Ventas y Facturación", "Control de Inventario en Tiempo Real (Kardex)", "Conexión API SUNAT (Guías de Remisión, Facturación Electrónica)", "Reportes Gerenciales de Stock y Kardex", "Capacitación de Personal"],
    process: [
        { title: "1. Auditoría Logística", description: "Entendemos tus flujos de inventario y puntos de dolor." },
        { title: "2. Diseño del Flujo de Sistema", description: "Mapeamos tus procesos y los digitalizamos." },
        { title: "3. Desarrollo e Integración", description: "Construimos los módulos y conectamos con SUNAT." },
        { title: "4. Pruebas y Despliegue", description: "Aseguramos que cada guía de remisión se genere correctamente." },
    ],
    tech: ["SUNAT API", "AWS", "Azure", "PHP", "MySQL", "IA (predicción)"],
    socialProof: {
        quote: "Desde que implementamos el sistema de AliiaTech, redujimos nuestros errores de facturación en un 95% y pasamos nuestra última auditoría de SUNAT sin observaciones.",
        author: "Gerente de Logística",
        company: "Transportes XYZ"
    },
    cta: "Solicite un Demo de Integración SUNAT"
    };

    const blueprint_marketing = {
    heroTitle: "Convierta Conversaciones en Clientes (WhatsApp, Instagram y Facebook).",
    problem: "Sus clientes le escriben por Instagram DMs y WhatsApp a todas horas, pero los leads se enfrían antes de que su equipo pueda responder. Está perdiendo ventas por no poder atender la demanda 24/7.",
    solution: "AliiaTech diseña e implementa una estrategia de Marketing Conversacional. Creamos chatbots inteligentes y flujos de automatización que capturan leads, responden preguntas frecuentes y califican clientes potenciales en tiempo real, directamente en Facebook, Instagram y WhatsApp.",
    features: ["Diseño de Flujo Conversacional y Personalidad del Bot", "Configuración de Chatbot con IA", "Integración con Meta (Facebook, Instagram DMs)", "Automatización de WhatsApp Business API", "Integración con su CRM y Hoja de Cálculo", "Reportes de Conversión (Power BI)"],
    process: [
        { title: "1. Estrategia Conversacional", description: "Definimos los objetivos: ¿capturar leads, dar soporte o vender?" },
        { title: "2. Diseño de Flujos y Personalidad", description: "Creamos las respuestas y el 'tono de voz' de tu bot." },
        { title: "3. Implementación y Pruebas", description: "Conectamos la IA y probamos todos los caminos posibles." },
        { title: "4. Lanzamiento y Optimización", description: "Lanzamos y medimos los resultados para mejorar." }
    ],
    tech: ["Meta API", "WhatsApp API", "Power BI", "IA (NLP)"],
    socialProof: {
        quote: "El chatbot que AliiaTech implementó maneja el 60% de nuestras consultas iniciales, permitiendo a nuestro equipo de ventas enfocarse solo en leads calificados.",
        author: "Gerente de Marketing",
        company: "Clínica Estética ABC"
    },
    cta: "Agende una Sesión de Estrategia Conversacional"
    };

    const blueprint_default = {
    heroTitle: "Soluciones Tecnológicas a tu Medida",
    problem: "El desafío principal en esta área es la falta de integración y la alta dependencia de procesos manuales, lo que genera ineficiencia y pérdida de oportunidades.",
    solution: "Nuestra solución se enfoca en centralizar sus operaciones, automatizar tareas repetitivas y proveer data en tiempo real para una toma de decisiones ágil y precisa.",
    features: ["Integración de Sistemas", "Automatización de Tareas", "Plataforma Centralizada", "Reportes en Tiempo Real"],
    process: [
        { title: "1. Análisis y Auditoría", description: "Evaluamos sus sistemas actuales e identificamos cuellos de botella." },
        { title: "2. Diseño de Arquitectura", description: "Diseñamos una solución escalable y a medida." },
        { title: "3. Desarrollo e Integración", description: "Construimos la nueva plataforma." },
        { title: "4. Pruebas y Despliegue", description: "Aseguramos un lanzamiento sin fricciones y capacitamos a su equipo." },
    ],
    tech: ["React", "Node.js", "Python", "AWS", "Power BI"],
    socialProof: {
        quote: "El equipo de AliiaTech entendió perfectamente nuestro problema y nos entregó una solución que superó nuestras expectativas.",
        author: "Gerente de Operaciones",
        company: "Empresa Líder del Sector"
    },
    cta: "Agendar un Demo Gratuito"
    };


    // --- BASE DE DATOS DE SERVICIOS (Tabla 3.1) ---
    export const servicesData = {
    
    // === Pilar 1: Desarrollo Web y E-commerce ===
    "diseno-tiendas-online": {
        id: 1,
        slug: "diseno-tiendas-online", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Desarrollo Web y E-commerce",
        icon: <PilarIconWeb/>,
        title: "Diseño de Tiendas Online y Ecommerce",
        shortDescription: "Plataformas de E-commerce robustas, rápidas y 100% integradas.",
        imageUrl: "/services/1.jpg",
        ...blueprint_ecommerce
    },
    "desarrollo-apps-moviles": {
        id: 2,
        slug: "desarrollo-apps-moviles", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Desarrollo Web y E-commerce",
        icon: <PilarIconWeb/>,
        title: "Desarrollo de Aplicaciones Móviles (iOS y Android)",
        shortDescription: "Apps para fuerza de ventas, logística, o clientes internos.",
        imageUrl: "/services/2.jpg",
        ...blueprint_default,
        heroTitle: "Lleva tu Negocio al Bolsillo de tus Clientes",
        problem: "¿Tu equipo de ventas pierde tiempo llenando reportes en papel? ¿Tus clientes no pueden autogestionar sus pedidos? Los procesos lentos y la falta de acceso móvil están frenando tu crecimiento.",
        solution: "Desarrollamos aplicaciones móviles nativas (iOS y Android) y progresivas (PWA) centradas en la eficiencia. Creamos apps para tu fuerza de ventas, apps de logística para seguimiento en tiempo real o apps de autogestión para tus clientes, todo conectado a tu sistema central.",
        features: ["Apps Nativas (iOS/Android) y PWA", "Diseño UX/UI enfocado en la usabilidad", "Integración con sistemas ERP/CRM", "Notificaciones Push", "Geolocalización y Seguimiento"],
        tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
        cta: "Cotiza tu Aplicación Móvil"
    },
    
    // === Pilar 2: Sistemas Empresariales y Automatización ===
    "sistemas-erp-crm": {
        id: 3,
        slug: "sistemas-erp-crm", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Sistemas Empresariales y Automatización",
        icon: <PilarIconSistemas/>,
        title: "Desarrollo de Software Empresarial (ERP y CRM)",
        shortDescription: "Software a medida enfocado en ROI, eficiencia y automatización de procesos.",
        imageUrl: "/services/3.jpg",
        ...blueprint_default,
        heroTitle: "Software a Medida para Decisiones Inteligentes",
        problem: "Tu operación ha crecido, pero sigues gestionando todo con múltiples hojas de Excel. La información está descentralizada, los reportes toman días y los errores humanos te cuestan dinero.",
        solution: "Diseñamos y desarrollamos sistemas ERP (Planificación de Recursos) y CRM (Gestión de Clientes) a la medida de tus procesos. Centralizamos tu información (ventas, finanzas, inventario) en una sola plataforma, te damos reportes gerenciales en tiempo real y automatizamos tus flujos de trabajo para eliminar la ineficiencia.",
        features: ["Módulos Personalizados (Ventas, Finanzas, RRHH, etc.)", "Integración de Procesos de Negocio", "Gestión de Relación con Clientes (CRM)", "Reportes Gerenciales y Dashboards", "Automatización de Flujos de Trabajo"],
        tech: ["Node.js", "Python (Django)", "React", "PostgreSQL", "AWS"],
        cta: "Solicita un Análisis de Procesos"
    },
    "sistemas-logistica-sunat": {
        id: 4,
        slug: "sistemas-logistica-sunat", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Sistemas Empresariales y Automatización",
        icon: <PilarIconSistemas/>,
        title: "Sistemas de Logística y Gestión (con Integración SUNAT)",
        shortDescription: "La conexión a SUNAT es el diferenciador clave. Enfocado en cumplimiento y automatización.",
        imageUrl: "/services/4.jpg",
        ...blueprint_logistica
    },
    "soluciones-ia": {
        id: 5,
        slug: "soluciones-ia", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Sistemas Empresariales y Automatización",
        icon: <PilarIconSistemas/>,
        title: "Soluciones de Inteligencia Artificial para Empresas",
        shortDescription: "IA para logística, análisis de ventas, o chatbots.",
        imageUrl: "/services/5.jpg",
        ...blueprint_default,
        heroTitle: "Inteligencia Artificial Aplicada a tu Negocio",
        problem: "Tomas decisiones basadas en la intuición en lugar de en los datos. No puedes identificar patrones en el comportamiento de tus clientes o predecir la demanda de tu inventario.",
        solution: "Implementamos modelos de Inteligencia Artificial y Machine Learning para resolver problemas de negocio reales. Desde sistemas de recomendación para tu E-commerce, predicción de demanda para tu logística, hasta análisis de sentimientos en redes sociales. Convertimos tus datos en una ventaja competitiva.",
        features: ["Análisis Predictivo de Ventas y Demanda", "Modelos de Recomendación de Productos", "Procesamiento de Lenguaje Natural (NLP) para Chatbots", "Visión por Computadora para control de calidad", "Optimización de Rutas Logísticas"],
        tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API"],
        cta: "Descubre el potencial de IA en tu Empresa"
    },
    "sistemas-automatizacion": {
        id: 6,
        slug: "sistemas-automatizacion", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Sistemas Empresariales y Automatización",
        icon: <PilarIconSistemas/>,
        title: "Sistemas de Automatización: Chatbots y Reservas",
        shortDescription: "Servicio horizontal que aumenta la eficiencia 24/7.",
        imageUrl: "/services/6.jpg",
        ...blueprint_default,
        heroTitle: "Tu Negocio Funcionando 24/7 con Automatización",
        problem: "Tu equipo de ventas y soporte pasa horas respondiendo las mismas preguntas una y otra vez. Los clientes se quejan de la demora en la atención y el proceso de reserva es manual y propenso a errores.",
        solution: "Implementamos sistemas de automatización que trabajan para ti 24/7. Desarrollamos Chatbots inteligentes (con o sin IA) que responden preguntas frecuentes y califican leads, y creamos sistemas de reservas online integrados con tu calendario, liberando a tu equipo para tareas de alto valor.",
        features: ["Desarrollo de Chatbots (WhatsApp, Web, RRSS)", "Sistemas de Reservas y Citas Online", "Automatización de Tareas Repetitivas (RPA)", "Integración con Calendarios y Pasarelas de Pago"],
        tech: ["Dialogflow", "RASA", "WhatsApp API", "Google Calendar API"],
        cta: "Automatiza tus Procesos Hoy"
    },
    "sistemas-mesa-ayuda": {
        id: 7,
        slug: "sistemas-mesa-ayuda", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Sistemas Empresariales y Automatización",
        icon: <PilarIconSistemas/>,
        title: "Implementación de Sistemas de Mesa de Ayuda (Help Desk)",
        shortDescription: "Mejora la productividad interna (IT) y la satisfacción del cliente (Soporte).",
        imageUrl: "/services/7.jpg",
        ...blueprint_default,
        heroTitle: "Optimiza tu Soporte Interno y Externo",
        problem: "Las solicitudes de soporte (tanto internas de IT como de clientes externos) llegan por email, WhatsApp y llamadas, creando un caos. No hay seguimiento, se pierden tickets y la productividad se desploma.",
        solution: "Implementamos y personalizamos plataformas de Mesa de Ayuda (Help Desk) como Zendesk, Jira Service Management o soluciones a medida. Centraliza todos tus canales de soporte, mide tus KPIs (tiempo de respuesta, resolución) y mejora drásticamente la satisfacción de tus usuarios.",
        features: ["Plataforma de Ticketing Centralizada", "Base de Conocimiento (Knowledge Base)", "Integración de Canales (Email, Web, Chat)", "Reportes y KPIs de Soporte", "SLA (Acuerdos de Nivel de Servicio)"],
        tech: ["Zendesk", "Jira", "Freshdesk", "Soluciones a Medida"],
        cta: "Organiza tu Mesa de Ayuda"
    },
    "servicios-cloud": {
        id: 8,
        slug: "servicios-cloud", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Sistemas Empresariales y Automatización",
        icon: <PilarIconSistemas/>,
        title: "Servicios de Infraestructura Cloud (AWS, Azure)",
        shortDescription: "La base escalable y segura para todos tus sistemas.",
        imageUrl: "/services/8.jpg",
        ...blueprint_default,
        heroTitle: "Infraestructura Cloud Escalable y Segura",
        problem: "Tu servidor físico es lento, costoso de mantener y no puede escalar en picos de demanda. Las caídas del sistema son frecuentes y tus backups no son confiables.",
        solution: "Migramos, administramos y optimizamos tu infraestructura en la nube (AWS, Azure, Google Cloud). Te ofrecemos una solución escalable que crece contigo, pagando solo por lo que usas. Garantizamos alta disponibilidad (99.9% uptime), seguridad de primer nivel y backups automáticos.",
        features: ["Migración a la Nube (Lift & Shift)", "Arquitectura Cloud Escalable", "Administración y Monitoreo 24/7", "Optimización de Costos (FinOps)", "Seguridad y Cumplimiento", "Planes de Recuperación de Desastres (DRP)"],
        tech: ["AWS (EC2, S3, RDS)", "Microsoft Azure", "Google Cloud Platform", "Docker", "Kubernetes"],
        cta: "Migra a la Nube con Expertos"
    },

    // === Pilar 3: Marketing y Estrategia Digital ===
    "marketing-conversacional": {
        id: 9,
        slug: "marketing-conversacional", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Marketing y Estrategia Digital",
        icon: <PilarIconMarketing/>,
        title: "Marketing Conversacional (WhatsApp & Redes Sociales)",
        shortDescription: "Generación de leads y automatización de servicio al cliente.",
        imageUrl: "/services/9.jpg",
        ...blueprint_marketing
    },
    "consultoria-negocios": {
        id: 10,
        slug: "consultoria-negocios", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Marketing y Estrategia Digital",
        icon: <PilarIconMarketing/>,
        title: "Consultoría de Negocios y Formalización Empresarial",
        shortDescription: "Servicio TOFU para capturar startups y luego venderles sistemas.",
        imageUrl: "/services/10.jpg",
        ...blueprint_default,
        heroTitle: "El Primer Paso de tu Empresa: Formalización y Estrategia",
        problem: "Tienes una gran idea de negocio pero no sabes cómo empezar. Te abruman los trámites de formalización, la elección de la estructura legal (SAC, EIRL) y cómo crear un plan de negocios viable.",
        solution: "Somos más que tecnólogos, somos asesores de negocios. Te guiamos paso a paso en el proceso de formalización de tu empresa en Perú. Te ayudamos a definir tu modelo de negocio, a estructurar tu plan financiero y a establecer las bases tecnológicas correctas desde el Día 1.",
        features: ["Asesoría en Constitución de Empresas (SAC, EIRL, SA)", "Planificación Estratégica y Modelo Canvas", "Análisis de Viabilidad Financiera", "Asesoría en Regímenes Tributarios", "Setup Tecnológico Inicial (Dominio, Correos, etc.)"],
        tech: ["Modelo Canvas", "Análisis FODA", "Plataformas de SUNAT/Registros Públicos"],
        cta: "Inicia tu Negocio con el Pie Derecho"
    },
    "auditoria-seguridad": {
        id: 11,
        slug: "auditoria-seguridad", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Marketing y Estrategia Digital",
        icon: <PilarIconMarketing/>,
        title: "Auditoría y Análisis de Seguridad Informática",
        shortDescription: "Servicio de auditoría esencial para empresas con ERP, Ecommerce o datos sensibles.",
        imageUrl: "/services/11.jpg",
        ...blueprint_default,
        heroTitle: "Protege tu Activo más Importante: Tus Datos",
        problem: "¿Estás seguro de que tu E-commerce es invulnerable a robos de tarjetas? ¿Tu sistema ERP está protegido contra ransomware? Una sola brecha de seguridad puede destruir la reputación de tu empresa.",
        solution: "Realizamos auditorías de seguridad informática y Pentesting (hacking ético) para encontrar vulnerabilidades en tus sistemas antes de que lo hagan los atacantes. Analizamos tus redes, aplicaciones web y políticas internas para entregarte un plan de acción claro y priorizado para blindar tu negocio.",
        features: ["Pentesting de Aplicaciones Web y Móviles", "Análisis de Vulnerabilidades de Red", "Auditoría de Configuración Cloud (AWS/Azure)", "Planes de Respuesta a Incidentes", "Capacitación en Concientización de Seguridad (Phishing)"],
        tech: ["OWASP Top 10", "NIST Framework", "Kali Linux", "Metasploit"],
        cta: "Solicita una Auditoría de Seguridad Gratuita"
    },
    "capacitacion-microsoft": {
        id: 12,
        slug: "capacitacion-microsoft", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Marketing y Estrategia Digital",
        icon: <PilarIconMarketing/>,
        title: "Capacitación y Optimización (Microsoft 365, Power BI)",
        shortDescription: "Enfocado en la herramienta (Microsoft) y la capacitación.",
        imageUrl: "/services/12.jpg",
        ...blueprint_default,
        heroTitle: "Maximiza tu Productividad con Microsoft 365 y Power BI",
        problem: "Tu empresa paga por licencias de Microsoft 365, pero tus empleados solo usan Word y Excel al 10%. Estás desperdiciando el potencial de herramientas colaborativas como Teams, SharePoint, y sobre todo, Power BI.",
        solution: "Ofrecemos capacitaciones corporativas enfocadas en la productividad. No enseñamos botones, enseñamos flujos de trabajo. Automatizamos tus reportes de Excel, movemos tus procesos a SharePoint y Teams, y capacitamos a tus gerentes para que creen sus propios dashboards en Power BI.",
        features: ["Capacitación en Excel Avanzado y Power Query", "Implementación de Microsoft Teams y SharePoint", "Talleres de Creación de Dashboards en Power BI", "Automatización con Power Automate", "Optimización de Licenciamiento Microsoft"],
        tech: ["Microsoft 365", "Power BI", "Power Automate", "SharePoint", "Excel"],
        cta: "Solicita un Diagnóstico de Productividad"
    },
    "analisis-power-bi": {
        id: 13,
        slug: "analisis-power-bi", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Marketing y Estrategia Digital",
        icon: <PilarIconMarketing/>,
        title: "Análisis de Ventas e Inteligencia de Negocios (Power BI)",
        shortDescription: "Convertimos tus datos en decisiones. Mostramos dashboards de ejemplo.",
        imageUrl: "/services/13.jpg",
        ...blueprint_default,
        heroTitle: "Deja que tus Datos te Muestren el Camino",
        problem: "Tienes datos de ventas, marketing y operaciones en múltiples sistemas (Excel, tu ERP, Google Analytics), pero no puedes cruzarlos. No sabes cuál es tu producto más rentable, tu mejor vendedor o tu cliente más valioso.",
        solution: "Somos expertos en Inteligencia de Negocios (BI). Nos conectamos a todas tus fuentes de datos, las limpiamos, modelamos y creamos Dashboards en Power BI que responden a tus preguntas de negocio. Deja de adivinar y empieza a tomar decisiones basadas en datos.",
        features: ["Extracción y Limpieza de Datos (ETL)", "Modelamiento de Datos (Tabular/Estrella)", "Diseño de Dashboards Gerenciales", "Análisis de Ventas, Finanzas y Marketing", "Integración de Múltiples Fuentes de Datos"],
        tech: ["Microsoft Power BI", "SQL Server", "Google Analytics", "DAX"],
        cta: "Obtén tu Primer Dashboard en Días"
    },
    
    // === Pilar 4: Soluciones por Industria ===
    "soluciones-turismo": {
        id: 14,
        slug: "soluciones-turismo", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Soluciones por Industria",
        icon: <PilarIconIndustria/>,
        title: "Soluciones Digitales para Turismo y Hoteles",
        shortDescription: "Paquete: Sitios Web + Sistemas de Reservas + Chatbots.",
        imageUrl: "/services/14.jpg",
        ...blueprint_default,
        heroTitle: "Gestión Hotelera y Turística Totalmente Digital",
        problem: "Las OTAs (Booking, Expedia) se llevan una comisión enorme de tus reservas. Tu sitio web no inspira confianza y tu proceso de reserva es un formulario de contacto manual que demora horas en responder.",
        solution: "Creamos un ecosistema digital completo para tu hotel o agencia de turismo. Desarrollamos un sitio web atractivo con un motor de reservas integrado (conectado a pasarelas de pago) y un chatbot con IA que gestiona la disponibilidad y responde preguntas 24/7, aumentando tus reservas directas.",
        features: ["Sitio Web para Hoteles y Agencias de Turismo", "Motor de Reservas Online (Integrado)", "Sincronización de Calendarios (Channel Manager)", "Chatbot con IA para Atención al Cliente 24/7", "Integración con Pasarelas de Pago"],
        tech: ["React", "Sistemas de Reservas (Beds24, etc.)", "WhatsApp API", "IA (NLP)"],
        cta: "Aumenta tus Reservas Directas"
    },
    "soluciones-constructoras": {
        id: 15,
        slug: "soluciones-constructoras", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Soluciones por Industria",
        icon: <PilarIconIndustria/>,
        title: "Soluciones Integrales para Constructoras e Inmobiliarias",
        shortDescription: "Paquete: Sitio Web + Software de Gestión + Diseño de Interiores.",
        imageUrl: "/services/15.jpg",
        ...blueprint_default,
        heroTitle: "Digitalizamos tu Proceso: Del Render a la Gestión",
        problem: "La gestión de tus proyectos de construcción es un caos de planos, Excels y presupuestos desactualizados. La comunicación entre la obra, la oficina de diseño y el equipo de ventas es deficiente.",
        solution: "Ofrecemos una solución 'Design-Build-Tech' única. Creamos tu sitio web inmobiliario para captar clientes, implementamos un software de gestión de proyectos (ERP) para controlar costos y logística, y lo integramos con nuestros servicios de Diseño de Interiores y Renderizado 3D para alinear la visión estética con la viabilidad del proyecto.",
        features: ["Sitio Web Inmobiliario con Renders 3D", "Software de Gestión de Proyectos (Costos, Logística)", "Servicios de Diseño de Interiores B2B", "Planificación de Espacios y Optimización", "Integración de ERP con Diseño (BIM)"],
        tech: ["Software ERP", "AutoCAD", "SketchUp", "BIM", "React"],
        cta: "Gestiona tu Proyecto de Inicio a Fin"
    },
    "soluciones-educacion": {
        id: 16,
        slug: "soluciones-educacion", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Soluciones por Industria",
        icon: <PilarIconIndustria/>,
        title: "Software de Gestión Académica y Certificados",
        shortDescription: "Micro-vertical enfocado en colegios e instituciones.",
        imageUrl: "/services/16.jpg",
        ...blueprint_default,
        heroTitle: "Automatización de Procesos para Instituciones Educativas",
        problem: "Tu institución educativa gasta cientos de horas-hombre en procesos manuales de matrícula, pago de pensiones y, sobre todo, en la generación y firma de certificados y diplomas.",
        solution: "Desarrollamos un software de gestión académica que automatiza el proceso de matrícula y pagos. Nuestra especialidad es el Generador Automático de Certificados, una plataforma que permite a los alumnos descargar sus certificados validados (con firma digital) al instante, ahorrando costos y tiempo administrativo.",
        features: ["Sistema de Matrícula y Pagos Online", "Generador Automático de Certificados y Diplomas", "Validación con Firma Digital", "Plataforma de Aula Virtual (LMS)", "Gestión de Notas y Asistencia"],
        tech: ["Moodle", "PHP/Laravel", "React", "Sistemas de Pago"],
        cta: "Automatiza tu Institución Educativa"
    },
    "diseno-interiores": {
        id: 17,
        slug: "diseno-interiores", // <-- ¡LA CORRECCIÓN ESTÁ AQUÍ!
        pillar: "Soluciones por Industria",
        icon: <PilarIconIndustria/>,
        title: "Diseño de Interiores y Planificación de Espacios",
        shortDescription: "Posicionado como un servicio B2B integrado a los proyectos de construcción.",
        imageUrl: "/services/17.jpg",
        ...blueprint_default,
        heroTitle: "Diseño de Espacios Funcionales y Estéticos (B2B)",
        problem: "Tus oficinas o proyectos inmobiliarios se sienten genéricos y no están optimizados para la productividad o el bienestar. La planificación del espacio es deficiente, creando flujos de trabajo ineficientes.",
        solution: "Posicionamos el diseño de interiores como una herramienta de negocio B2B. No solo creamos espacios estéticos, sino funcionales. Nos integramos con tus arquitectos y equipo de construcción para planificar la distribución (planificación de espacios) y el diseño, asegurando que el resultado final sea productivo, ergonómico y alineado con tu marca.",
        features: ["Diseño de Oficinas Corporativas", "Planificación de Espacios (Space Planning)", "Renderizado 3D y Realidad Virtual", "Optimización de Flujo de Trabajo", "Integración con Proyectos de Construcción"],
        tech: ["AutoCAD", "SketchUp", "V-Ray", "Revit"],
        cta: "Diseña un Espacio Productivo"
    },
    };

    // Exportamos un array de todos los servicios para iterar fácilmente
    export const servicesArray = Object.values(servicesData);