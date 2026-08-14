// Datos migrados 1:1 desde aliia-tech/src/data/servicesData.jsx y blogData.jsx
// (JSX -> objetos planos / Markdown, para sembrar la base de datos Neon).

const defaultProcess = [
  { title: "1. Análisis y Auditoría", description: "Evaluamos sus sistemas actuales e identificamos cuellos de botella." },
  { title: "2. Diseño de Arquitectura", description: "Diseñamos una solución escalable y a medida." },
  { title: "3. Desarrollo e Integración", description: "Construimos la nueva plataforma." },
  { title: "4. Pruebas y Despliegue", description: "Aseguramos un lanzamiento sin fricciones y capacitamos a su equipo." },
];

const defaultSocialProof = {
  quote:
    "El equipo de AliiaTech entendió perfectamente nuestro problema y nos entregó una solución que superó nuestras expectativas.",
  author: "Gerente de Operaciones",
  company: "Empresa Líder del Sector",
};

export const seedServices = [
  {
    slug: "diseno-tiendas-online",
    pillar: "Desarrollo Web y E-commerce",
    iconKey: "web",
    title: "Diseño de Tiendas Online y Ecommerce",
    shortDescription: "Plataformas de E-commerce robustas, rápidas y 100% integradas.",
    imageUrl: "/services/1.jpg",
    heroTitle: "Vende Más. Gestiona Menos. Creamos tu Tienda Online a Medida.",
    problem:
      "¿Tus ventas online están estancadas? ¿Tu plataforma actual es lenta, difícil de gestionar y no se conecta con tu inventario, obligándote a hacer doble trabajo? Estás perdiendo clientes por un carrito de compras complicado y una experiencia de pago insegura.",
    solution:
      "AliiaTech no solo 'diseña' tu tienda; construimos tu motor de ventas digital. Desarrollamos plataformas E-commerce robustas, rápidas y 100% integradas con tus sistemas de pago y logística. Desde el UX/UI que enamora a tus clientes hasta la integración con pasarelas de pago (Niubiz, Culqi, Izipay), te entregamos una tienda lista para vender.",
    features: [
      "Diseño UX/UI Centrado en la Conversión (CRO)",
      "Integración con todas las Pasarelas de Pago",
      "Optimización SEO para E-commerce",
      "Diseño 100% Responsivo (Móvil, Tablet, PC)",
      "Capacitación y Carga Inicial de Productos",
      "Conexión con tu ERP o Sistema de Inventario",
    ],
    process: [
      { title: "1. Análisis de Negocio", description: "Estudiamos tu competencia y tu público objetivo." },
      { title: "2. Diseño y Prototipado UX/UI", description: "Creamos un diseño enfocado en la conversión." },
      { title: "3. Desarrollo e Integración", description: "Construimos la tienda e integramos las pasarelas de pago." },
      { title: "4. Pruebas y Lanzamiento", description: "Aseguramos que tu tienda sea rápida y segura." },
    ],
    tech: ["Shopify", "WooCommerce", "Magento", "React", "Node.js"],
    socialProof: {
      quote:
        "Migramos nuestra tienda con AliiaTech y las ventas aumentaron un 40% en 3 meses. El nuevo sistema nos ahorra 10 horas de trabajo a la semana.",
      author: "Gerente de E-commerce",
      company: "Tienda ABC",
    },
    cta: "Solicita tu Auditoría E-commerce Gratuita",
  },
  {
    slug: "desarrollo-apps-moviles",
    pillar: "Desarrollo Web y E-commerce",
    iconKey: "web",
    title: "Desarrollo de Aplicaciones Móviles (iOS y Android)",
    shortDescription: "Apps para fuerza de ventas, logística, o clientes internos.",
    imageUrl: "/services/2.jpg",
    heroTitle: "Lleva tu Negocio al Bolsillo de tus Clientes",
    problem:
      "¿Tu equipo de ventas pierde tiempo llenando reportes en papel? ¿Tus clientes no pueden autogestionar sus pedidos? Los procesos lentos y la falta de acceso móvil están frenando tu crecimiento.",
    solution:
      "Desarrollamos aplicaciones móviles nativas (iOS y Android) y progresivas (PWA) centradas en la eficiencia. Creamos apps para tu fuerza de ventas, apps de logística para seguimiento en tiempo real o apps de autogestión para tus clientes, todo conectado a tu sistema central.",
    features: [
      "Apps Nativas (iOS/Android) y PWA",
      "Diseño UX/UI enfocado en la usabilidad",
      "Integración con sistemas ERP/CRM",
      "Notificaciones Push",
      "Geolocalización y Seguimiento",
    ],
    process: defaultProcess,
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    socialProof: defaultSocialProof,
    cta: "Cotiza tu Aplicación Móvil",
  },
  {
    slug: "sistemas-erp-crm",
    pillar: "Sistemas Empresariales y Automatización",
    iconKey: "sistemas",
    title: "Desarrollo de Software Empresarial (ERP y CRM)",
    shortDescription: "Software a medida enfocado en ROI, eficiencia y automatización de procesos.",
    imageUrl: "/services/3.jpg",
    heroTitle: "Software a Medida para Decisiones Inteligentes",
    problem:
      "Tu operación ha crecido, pero sigues gestionando todo con múltiples hojas de Excel. La información está descentralizada, los reportes toman días y los errores humanos te cuestan dinero.",
    solution:
      "Diseñamos y desarrollamos sistemas ERP (Planificación de Recursos) y CRM (Gestión de Clientes) a la medida de tus procesos. Centralizamos tu información (ventas, finanzas, inventario) en una sola plataforma, te damos reportes gerenciales en tiempo real y automatizamos tus flujos de trabajo para eliminar la ineficiencia.",
    features: [
      "Módulos Personalizados (Ventas, Finanzas, RRHH, etc.)",
      "Integración de Procesos de Negocio",
      "Gestión de Relación con Clientes (CRM)",
      "Reportes Gerenciales y Dashboards",
      "Automatización de Flujos de Trabajo",
    ],
    process: defaultProcess,
    tech: ["Node.js", "Python (Django)", "React", "PostgreSQL", "AWS"],
    socialProof: defaultSocialProof,
    cta: "Solicita un Análisis de Procesos",
  },
  {
    slug: "sistemas-logistica-sunat",
    pillar: "Sistemas Empresariales y Automatización",
    iconKey: "sistemas",
    title: "Sistemas de Logística y Gestión (con Integración SUNAT)",
    shortDescription: "La conexión a SUNAT es el diferenciador clave. Enfocado en cumplimiento y automatización.",
    imageUrl: "/services/4.jpg",
    heroTitle: "Automatice su Logística y Cumpla con SUNAT sin Esfuerzo.",
    problem:
      "¿Pierde tiempo valioso en la generación manual de guías de remisión? ¿Los errores de inventario afectan sus ventas y la falta de cumplimiento con SUNAT le genera riesgos de auditoría?",
    solution:
      "AliiaTech desarrolla un Sistema de Logística y Gestión a medida que se integra perfectamente con sus operaciones. Automatizamos sus procesos de compra y venta y conectamos su facturación directamente a los servicios web de SUNAT, eliminando el error humano y dándole visibilidad total de su cadena de suministro.",
    features: [
      "Módulo de Compras y Proveedores",
      "Módulo de Ventas y Facturación",
      "Control de Inventario en Tiempo Real (Kardex)",
      "Conexión API SUNAT (Guías de Remisión, Facturación Electrónica)",
      "Reportes Gerenciales de Stock y Kardex",
      "Capacitación de Personal",
    ],
    process: [
      { title: "1. Auditoría Logística", description: "Entendemos tus flujos de inventario y puntos de dolor." },
      { title: "2. Diseño del Flujo de Sistema", description: "Mapeamos tus procesos y los digitalizamos." },
      { title: "3. Desarrollo e Integración", description: "Construimos los módulos y conectamos con SUNAT." },
      { title: "4. Pruebas y Despliegue", description: "Aseguramos que cada guía de remisión se genere correctamente." },
    ],
    tech: ["SUNAT API", "AWS", "Azure", "PHP", "MySQL", "IA (predicción)"],
    socialProof: {
      quote:
        "Desde que implementamos el sistema de AliiaTech, redujimos nuestros errores de facturación en un 95% y pasamos nuestra última auditoría de SUNAT sin observaciones.",
      author: "Gerente de Logística",
      company: "Transportes XYZ",
    },
    cta: "Solicite un Demo de Integración SUNAT",
  },
  {
    slug: "soluciones-ia",
    pillar: "Sistemas Empresariales y Automatización",
    iconKey: "sistemas",
    title: "Soluciones de Inteligencia Artificial para Empresas",
    shortDescription: "IA para logística, análisis de ventas, o chatbots.",
    imageUrl: "/services/5.jpg",
    heroTitle: "Inteligencia Artificial Aplicada a tu Negocio",
    problem:
      "Tomas decisiones basadas en la intuición en lugar de en los datos. No puedes identificar patrones en el comportamiento de tus clientes o predecir la demanda de tu inventario.",
    solution:
      "Implementamos modelos de Inteligencia Artificial y Machine Learning para resolver problemas de negocio reales. Desde sistemas de recomendación para tu E-commerce, predicción de demanda para tu logística, hasta análisis de sentimientos en redes sociales. Convertimos tus datos en una ventaja competitiva.",
    features: [
      "Análisis Predictivo de Ventas y Demanda",
      "Modelos de Recomendación de Productos",
      "Procesamiento de Lenguaje Natural (NLP) para Chatbots",
      "Visión por Computadora para control de calidad",
      "Optimización de Rutas Logísticas",
    ],
    process: defaultProcess,
    tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API"],
    socialProof: defaultSocialProof,
    cta: "Descubre el potencial de IA en tu Empresa",
  },
  {
    slug: "sistemas-automatizacion",
    pillar: "Sistemas Empresariales y Automatización",
    iconKey: "sistemas",
    title: "Sistemas de Automatización: Chatbots y Reservas",
    shortDescription: "Servicio horizontal que aumenta la eficiencia 24/7.",
    imageUrl: "/services/6.jpg",
    heroTitle: "Tu Negocio Funcionando 24/7 con Automatización",
    problem:
      "Tu equipo de ventas y soporte pasa horas respondiendo las mismas preguntas una y otra vez. Los clientes se quejan de la demora en la atención y el proceso de reserva es manual y propenso a errores.",
    solution:
      "Implementamos sistemas de automatización que trabajan para ti 24/7. Desarrollamos Chatbots inteligentes (con o sin IA) que responden preguntas frecuentes y califican leads, y creamos sistemas de reservas online integrados con tu calendario, liberando a tu equipo para tareas de alto valor.",
    features: [
      "Desarrollo de Chatbots (WhatsApp, Web, RRSS)",
      "Sistemas de Reservas y Citas Online",
      "Automatización de Tareas Repetitivas (RPA)",
      "Integración con Calendarios y Pasarelas de Pago",
    ],
    process: defaultProcess,
    tech: ["Dialogflow", "RASA", "WhatsApp API", "Google Calendar API"],
    socialProof: defaultSocialProof,
    cta: "Automatiza tus Procesos Hoy",
  },
  {
    slug: "sistemas-mesa-ayuda",
    pillar: "Sistemas Empresariales y Automatización",
    iconKey: "sistemas",
    title: "Implementación de Sistemas de Mesa de Ayuda (Help Desk)",
    shortDescription: "Mejora la productividad interna (IT) y la satisfacción del cliente (Soporte).",
    imageUrl: "/services/7.jpg",
    heroTitle: "Optimiza tu Soporte Interno y Externo",
    problem:
      "Las solicitudes de soporte (tanto internas de IT como de clientes externos) llegan por email, WhatsApp y llamadas, creando un caos. No hay seguimiento, se pierden tickets y la productividad se desploma.",
    solution:
      "Implementamos y personalizamos plataformas de Mesa de Ayuda (Help Desk) como Zendesk, Jira Service Management o soluciones a medida. Centraliza todos tus canales de soporte, mide tus KPIs (tiempo de respuesta, resolución) y mejora drásticamente la satisfacción de tus usuarios.",
    features: [
      "Plataforma de Ticketing Centralizada",
      "Base de Conocimiento (Knowledge Base)",
      "Integración de Canales (Email, Web, Chat)",
      "Reportes y KPIs de Soporte",
      "SLA (Acuerdos de Nivel de Servicio)",
    ],
    process: defaultProcess,
    tech: ["Zendesk", "Jira", "Freshdesk", "Soluciones a Medida"],
    socialProof: defaultSocialProof,
    cta: "Organiza tu Mesa de Ayuda",
  },
  {
    slug: "servicios-cloud",
    pillar: "Sistemas Empresariales y Automatización",
    iconKey: "sistemas",
    title: "Servicios de Infraestructura Cloud (AWS, Azure)",
    shortDescription: "La base escalable y segura para todos tus sistemas.",
    imageUrl: "/services/8.jpg",
    heroTitle: "Infraestructura Cloud Escalable y Segura",
    problem:
      "Tu servidor físico es lento, costoso de mantener y no puede escalar en picos de demanda. Las caídas del sistema son frecuentes y tus backups no son confiables.",
    solution:
      "Migramos, administramos y optimizamos tu infraestructura en la nube (AWS, Azure, Google Cloud). Te ofrecemos una solución escalable que crece contigo, pagando solo por lo que usas. Garantizamos alta disponibilidad (99.9% uptime), seguridad de primer nivel y backups automáticos.",
    features: [
      "Migración a la Nube (Lift & Shift)",
      "Arquitectura Cloud Escalable",
      "Administración y Monitoreo 24/7",
      "Optimización de Costos (FinOps)",
      "Seguridad y Cumplimiento",
      "Planes de Recuperación de Desastres (DRP)",
    ],
    process: defaultProcess,
    tech: ["AWS (EC2, S3, RDS)", "Microsoft Azure", "Google Cloud Platform", "Docker", "Kubernetes"],
    socialProof: defaultSocialProof,
    cta: "Migra a la Nube con Expertos",
  },
  {
    slug: "marketing-conversacional",
    pillar: "Marketing y Estrategia Digital",
    iconKey: "marketing",
    title: "Marketing Conversacional (WhatsApp & Redes Sociales)",
    shortDescription: "Generación de leads y automatización de servicio al cliente.",
    imageUrl: "/services/9.jpg",
    heroTitle: "Convierta Conversaciones en Clientes (WhatsApp, Instagram y Facebook).",
    problem:
      "Sus clientes le escriben por Instagram DMs y WhatsApp a todas horas, pero los leads se enfrían antes de que su equipo pueda responder. Está perdiendo ventas por no poder atender la demanda 24/7.",
    solution:
      "AliiaTech diseña e implementa una estrategia de Marketing Conversacional. Creamos chatbots inteligentes y flujos de automatización que capturan leads, responden preguntas frecuentes y califican clientes potenciales en tiempo real, directamente en Facebook, Instagram y WhatsApp.",
    features: [
      "Diseño de Flujo Conversacional y Personalidad del Bot",
      "Configuración de Chatbot con IA",
      "Integración con Meta (Facebook, Instagram DMs)",
      "Automatización de WhatsApp Business API",
      "Integración con su CRM y Hoja de Cálculo",
      "Reportes de Conversión (Power BI)",
    ],
    process: [
      { title: "1. Estrategia Conversacional", description: "Definimos los objetivos: ¿capturar leads, dar soporte o vender?" },
      { title: "2. Diseño de Flujos y Personalidad", description: "Creamos las respuestas y el 'tono de voz' de tu bot." },
      { title: "3. Implementación y Pruebas", description: "Conectamos la IA y probamos todos los caminos posibles." },
      { title: "4. Lanzamiento y Optimización", description: "Lanzamos y medimos los resultados para mejorar." },
    ],
    tech: ["Meta API", "WhatsApp API", "Power BI", "IA (NLP)"],
    socialProof: {
      quote:
        "El chatbot que AliiaTech implementó maneja el 60% de nuestras consultas iniciales, permitiendo a nuestro equipo de ventas enfocarse solo en leads calificados.",
      author: "Gerente de Marketing",
      company: "Clínica Estética ABC",
    },
    cta: "Agende una Sesión de Estrategia Conversacional",
  },
  {
    slug: "consultoria-negocios",
    pillar: "Marketing y Estrategia Digital",
    iconKey: "marketing",
    title: "Consultoría de Negocios y Formalización Empresarial",
    shortDescription: "Servicio TOFU para capturar startups y luego venderles sistemas.",
    imageUrl: "/services/10.jpg",
    heroTitle: "El Primer Paso de tu Empresa: Formalización y Estrategia",
    problem:
      "Tienes una gran idea de negocio pero no sabes cómo empezar. Te abruman los trámites de formalización, la elección de la estructura legal (SAC, EIRL) y cómo crear un plan de negocios viable.",
    solution:
      "Somos más que tecnólogos, somos asesores de negocios. Te guiamos paso a paso en el proceso de formalización de tu empresa en Perú. Te ayudamos a definir tu modelo de negocio, a estructurar tu plan financiero y a establecer las bases tecnológicas correctas desde el Día 1.",
    features: [
      "Asesoría en Constitución de Empresas (SAC, EIRL, SA)",
      "Planificación Estratégica y Modelo Canvas",
      "Análisis de Viabilidad Financiera",
      "Asesoría en Regímenes Tributarios",
      "Setup Tecnológico Inicial (Dominio, Correos, etc.)",
    ],
    process: defaultProcess,
    tech: ["Modelo Canvas", "Análisis FODA", "Plataformas de SUNAT/Registros Públicos"],
    socialProof: defaultSocialProof,
    cta: "Inicia tu Negocio con el Pie Derecho",
  },
  {
    slug: "auditoria-seguridad",
    pillar: "Marketing y Estrategia Digital",
    iconKey: "marketing",
    title: "Auditoría y Análisis de Seguridad Informática",
    shortDescription: "Servicio de auditoría esencial para empresas con ERP, Ecommerce o datos sensibles.",
    imageUrl: "/services/11.jpg",
    heroTitle: "Protege tu Activo más Importante: Tus Datos",
    problem:
      "¿Estás seguro de que tu E-commerce es invulnerable a robos de tarjetas? ¿Tu sistema ERP está protegido contra ransomware? Una sola brecha de seguridad puede destruir la reputación de tu empresa.",
    solution:
      "Realizamos auditorías de seguridad informática y Pentesting (hacking ético) para encontrar vulnerabilidades en tus sistemas antes de que lo hagan los atacantes. Analizamos tus redes, aplicaciones web y políticas internas para entregarte un plan de acción claro y priorizado para blindar tu negocio.",
    features: [
      "Pentesting de Aplicaciones Web y Móviles",
      "Análisis de Vulnerabilidades de Red",
      "Auditoría de Configuración Cloud (AWS/Azure)",
      "Planes de Respuesta a Incidentes",
      "Capacitación en Concientización de Seguridad (Phishing)",
    ],
    process: defaultProcess,
    tech: ["OWASP Top 10", "NIST Framework", "Kali Linux", "Metasploit"],
    socialProof: defaultSocialProof,
    cta: "Solicita una Auditoría de Seguridad Gratuita",
  },
  {
    slug: "capacitacion-microsoft",
    pillar: "Marketing y Estrategia Digital",
    iconKey: "marketing",
    title: "Capacitación y Optimización (Microsoft 365, Power BI)",
    shortDescription: "Enfocado en la herramienta (Microsoft) y la capacitación.",
    imageUrl: "/services/12.jpg",
    heroTitle: "Maximiza tu Productividad con Microsoft 365 y Power BI",
    problem:
      "Tu empresa paga por licencias de Microsoft 365, pero tus empleados solo usan Word y Excel al 10%. Estás desperdiciando el potencial de herramientas colaborativas como Teams, SharePoint, y sobre todo, Power BI.",
    solution:
      "Ofrecemos capacitaciones corporativas enfocadas en la productividad. No enseñamos botones, enseñamos flujos de trabajo. Automatizamos tus reportes de Excel, movemos tus procesos a SharePoint y Teams, y capacitamos a tus gerentes para que creen sus propios dashboards en Power BI.",
    features: [
      "Capacitación en Excel Avanzado y Power Query",
      "Implementación de Microsoft Teams y SharePoint",
      "Talleres de Creación de Dashboards en Power BI",
      "Automatización con Power Automate",
      "Optimización de Licenciamiento Microsoft",
    ],
    process: defaultProcess,
    tech: ["Microsoft 365", "Power BI", "Power Automate", "SharePoint", "Excel"],
    socialProof: defaultSocialProof,
    cta: "Solicita un Diagnóstico de Productividad",
  },
  {
    slug: "analisis-power-bi",
    pillar: "Marketing y Estrategia Digital",
    iconKey: "marketing",
    title: "Análisis de Ventas e Inteligencia de Negocios (Power BI)",
    shortDescription: "Convertimos tus datos en decisiones. Mostramos dashboards de ejemplo.",
    imageUrl: "/services/13.jpg",
    heroTitle: "Deja que tus Datos te Muestren el Camino",
    problem:
      "Tienes datos de ventas, marketing y operaciones en múltiples sistemas (Excel, tu ERP, Google Analytics), pero no puedes cruzarlos. No sabes cuál es tu producto más rentable, tu mejor vendedor o tu cliente más valioso.",
    solution:
      "Somos expertos en Inteligencia de Negocios (BI). Nos conectamos a todas tus fuentes de datos, las limpiamos, modelamos y creamos Dashboards en Power BI que responden a tus preguntas de negocio. Deja de adivinar y empieza a tomar decisiones basadas en datos.",
    features: [
      "Extracción y Limpieza de Datos (ETL)",
      "Modelamiento de Datos (Tabular/Estrella)",
      "Diseño de Dashboards Gerenciales",
      "Análisis de Ventas, Finanzas y Marketing",
      "Integración de Múltiples Fuentes de Datos",
    ],
    process: defaultProcess,
    tech: ["Microsoft Power BI", "SQL Server", "Google Analytics", "DAX"],
    socialProof: defaultSocialProof,
    cta: "Obtén tu Primer Dashboard en Días",
  },
  {
    slug: "soluciones-turismo",
    pillar: "Soluciones por Industria",
    iconKey: "industria",
    title: "Soluciones Digitales para Turismo y Hoteles",
    shortDescription: "Paquete: Sitios Web + Sistemas de Reservas + Chatbots.",
    imageUrl: "/services/14.jpg",
    heroTitle: "Gestión Hotelera y Turística Totalmente Digital",
    problem:
      "Las OTAs (Booking, Expedia) se llevan una comisión enorme de tus reservas. Tu sitio web no inspira confianza y tu proceso de reserva es un formulario de contacto manual que demora horas en responder.",
    solution:
      "Creamos un ecosistema digital completo para tu hotel o agencia de turismo. Desarrollamos un sitio web atractivo con un motor de reservas integrado (conectado a pasarelas de pago) y un chatbot con IA que gestiona la disponibilidad y responde preguntas 24/7, aumentando tus reservas directas.",
    features: [
      "Sitio Web para Hoteles y Agencias de Turismo",
      "Motor de Reservas Online (Integrado)",
      "Sincronización de Calendarios (Channel Manager)",
      "Chatbot con IA para Atención al Cliente 24/7",
      "Integración con Pasarelas de Pago",
    ],
    process: defaultProcess,
    tech: ["React", "Sistemas de Reservas (Beds24, etc.)", "WhatsApp API", "IA (NLP)"],
    socialProof: defaultSocialProof,
    cta: "Aumenta tus Reservas Directas",
  },
  {
    slug: "soluciones-constructoras",
    pillar: "Soluciones por Industria",
    iconKey: "industria",
    title: "Soluciones Integrales para Constructoras e Inmobiliarias",
    shortDescription: "Paquete: Sitio Web + Software de Gestión + Diseño de Interiores.",
    imageUrl: "/services/15.jpg",
    heroTitle: "Digitalizamos tu Proceso: Del Render a la Gestión",
    problem:
      "La gestión de tus proyectos de construcción es un caos de planos, Excels y presupuestos desactualizados. La comunicación entre la obra, la oficina de diseño y el equipo de ventas es deficiente.",
    solution:
      "Ofrecemos una solución 'Design-Build-Tech' única. Creamos tu sitio web inmobiliario para captar clientes, implementamos un software de gestión de proyectos (ERP) para controlar costos y logística, y lo integramos con nuestros servicios de Diseño de Interiores y Renderizado 3D para alinear la visión estética con la viabilidad del proyecto.",
    features: [
      "Sitio Web Inmobiliario con Renders 3D",
      "Software de Gestión de Proyectos (Costos, Logística)",
      "Servicios de Diseño de Interiores B2B",
      "Planificación de Espacios y Optimización",
      "Integración de ERP con Diseño (BIM)",
    ],
    process: defaultProcess,
    tech: ["Software ERP", "AutoCAD", "SketchUp", "BIM", "React"],
    socialProof: defaultSocialProof,
    cta: "Gestiona tu Proyecto de Inicio a Fin",
  },
  {
    slug: "soluciones-educacion",
    pillar: "Soluciones por Industria",
    iconKey: "industria",
    title: "Software de Gestión Académica y Certificados",
    shortDescription: "Micro-vertical enfocado en colegios e instituciones.",
    imageUrl: "/services/16.jpg",
    heroTitle: "Automatización de Procesos para Instituciones Educativas",
    problem:
      "Tu institución educativa gasta cientos de horas-hombre en procesos manuales de matrícula, pago de pensiones y, sobre todo, en la generación y firma de certificados y diplomas.",
    solution:
      "Desarrollamos un software de gestión académica que automatiza el proceso de matrícula y pagos. Nuestra especialidad es el Generador Automático de Certificados, una plataforma que permite a los alumnos descargar sus certificados validados (con firma digital) al instante, ahorrando costos y tiempo administrativo.",
    features: [
      "Sistema de Matrícula y Pagos Online",
      "Generador Automático de Certificados y Diplomas",
      "Validación con Firma Digital",
      "Plataforma de Aula Virtual (LMS)",
      "Gestión de Notas y Asistencia",
    ],
    process: defaultProcess,
    tech: ["Moodle", "PHP/Laravel", "React", "Sistemas de Pago"],
    socialProof: defaultSocialProof,
    cta: "Automatiza tu Institución Educativa",
  },
  {
    slug: "diseno-interiores",
    pillar: "Soluciones por Industria",
    iconKey: "industria",
    title: "Diseño de Interiores y Planificación de Espacios",
    shortDescription: "Posicionado como un servicio B2B integrado a los proyectos de construcción.",
    imageUrl: "/services/17.jpg",
    heroTitle: "Diseño de Espacios Funcionales y Estéticos (B2B)",
    problem:
      "Tus oficinas o proyectos inmobiliarios se sienten genéricos y no están optimizados para la productividad o el bienestar. La planificación del espacio es deficiente, creando flujos de trabajo ineficientes.",
    solution:
      "Posicionamos el diseño de interiores como una herramienta de negocio B2B. No solo creamos espacios estéticos, sino funcionales. Nos integramos con tus arquitectos y equipo de construcción para planificar la distribución (planificación de espacios) y el diseño, asegurando que el resultado final sea productivo, ergonómico y alineado con tu marca.",
    features: [
      "Diseño de Oficinas Corporativas",
      "Planificación de Espacios (Space Planning)",
      "Renderizado 3D y Realidad Virtual",
      "Optimización de Flujo de Trabajo",
      "Integración con Proyectos de Construcción",
    ],
    process: defaultProcess,
    tech: ["AutoCAD", "SketchUp", "V-Ray", "Revit"],
    socialProof: defaultSocialProof,
    cta: "Diseña un Espacio Productivo",
  },
];

export const seedBlogPosts = [
  {
    slug: "como-ia-transforma-empresas",
    title: "Cómo la Inteligencia Artificial está transformando las empresas",
    shortDescription:
      "Explora cómo las herramientas de IA pueden ayudarte a automatizar tareas y aumentar tus ventas.",
    imageUrl: "/IA-Negocios.jpg",
    author: "CEO de Aliia Tech",
    date: "5 de Noviembre, 2025",
    contentMarkdown: `La inteligencia artificial (IA) ha dejado de ser un concepto de ciencia ficción para convertirse en una **herramienta empresarial fundamental**. Hoy, exploramos cómo las herramientas de IA, desde el machine learning hasta los modelos de lenguaje natural, pueden automatizar tareas repetitivas, optimizar la logística y, lo más importante, aumentar tus ventas.

### 1. Automatización Inteligente de Tareas

Tareas que antes tomaban horas, como la clasificación de correos electrónicos de soporte, la entrada de datos o la conciliación de facturas, ahora pueden ser manejadas por la IA en segundos. Esto no solo reduce costos, sino que libera a tu equipo para que se concentre en tareas estratégicas de alto valor, como la atención al cliente personalizada o el cierre de ventas complejas.

### 2. Análisis Predictivo para Ventas y Marketing

En lugar de adivinar, la IA puede analizar tus datos históricos de ventas (integrados con Power BI) para identificar patrones complejos. Puede predecir:

- **Qué clientes** tienen más probabilidades de comprar próximamente.
- **Qué productos** deberías promocionar (venta cruzada o upselling).
- **Optimización de precios** en tiempo real para maximizar la rentabilidad.

Esto te permite pasar de un marketing reactivo a uno **proactivo y personalizado**.

### 3. Hiper-personalización del Cliente (Chatbots)

Los chatbots modernos, potenciados por IA, ya no solo responden "Sí" o "No". Pueden entender el lenguaje natural (NLP), acceder al historial de un cliente y ofrecer soluciones en tiempo real. Un cliente que pregunta por "mi último pedido" puede recibir su estado de seguimiento al instante, 24/7, sin intervención humana.

### Conclusión: El Futuro es Ahora

La IA no es una amenaza, es un **co-piloto** para tu negocio. Las empresas que adopten la IA para automatizar lo mundano y analizar lo complejo serán las que lideren el mercado. En Aliia Tech, nos especializamos en integrar estas soluciones de IA en tus sistemas existentes (ERP, CRM, E-commerce) para que puedas ver resultados tangibles.`,
  },
  {
    slug: "5-estrategias-tienda-online",
    title: "5 estrategias clave para posicionar tu tienda online",
    shortDescription: "Optimiza tu e-commerce con SEO, automatización y estrategias digitales modernas.",
    imageUrl: "/E-commerce.jpg",
    author: "Especialista en E-commerce",
    date: "1 de Noviembre, 2025",
    contentMarkdown: `Tener una tienda online es solo el primer paso. El verdadero desafío es atraer tráfico calificado y convertirlo en ventas. En un mercado saturado, no basta con "existir". Aquí te presentamos 5 estrategias esenciales que aplicamos en AliiaTech para optimizar tu e-commerce.

### 1. SEO Técnico y de Producto Impecable

El SEO es tu mejor vendedor a largo plazo. No se trata solo de palabras clave, sino de estructura:

- **Velocidad de Carga (Core Web Vitals):** Si tu tienda demora más de 3 segundos en cargar, estás perdiendo ventas. Optimizamos imágenes, código y servidor.
- **Datos Estructurados (Schema):** Le decimos a Google el precio, stock y reseñas de tus productos para que aparezcan directamente en los resultados de búsqueda.
- **Descripciones de Producto Únicas:** Evita el "copiar y pegar" del proveedor. Redactamos contenido que vende y posiciona.

### 2. Publicidad Pagada Hiper-enfocada (SEM)

El SEO toma tiempo. La publicidad pagada (Google Ads, Meta Ads) trae tráfico inmediato. La clave es no gastar por gastar. Implementamos campañas de **Performance Max** y **Shopping** para mostrar tus productos exactos a personas que están buscando comprarlos *ahora*.

### 3. Automatización de Carrito Abandonado

¿Sabías que casi el 70% de los carritos de compra se abandonan? Es una mina de oro perdida. Implementamos flujos automáticos de email y WhatsApp que recuerdan al cliente su compra, ofrecen un pequeño descuento y recuperan un porcentaje significativo de esas ventas perdidas.

### 4. Integración con Inventario (ERP)

El peor error de un e-commerce es vender un producto que no tienes en stock. Esto destruye la confianza. Integramos tu tienda online directamente con tu sistema de inventario o ERP (como el que desarrollamos con conexión a SUNAT). Si vendes en la tienda física, el stock se actualiza en la web. Si vendes en la web, se descuenta del inventario general. **Todo en un solo lugar.**

### 5. Prueba Social y Reseñas

Nadie compra en una tienda vacía. Integramos sistemas de reseñas verificadas (fotos y comentarios) que generan confianza. Los nuevos clientes confían en clientes anteriores. Es la forma más auténtica de marketing.`,
  },
  {
    slug: "transformacion-digital-futuro",
    title: "Transformación digital: cómo preparar tu empresa para el futuro",
    shortDescription:
      "Descubre los pasos esenciales para digitalizar tus operaciones y mantener tu competitividad.",
    imageUrl: "/Transformacion-Digital.jpg",
    author: "Consultor Senior",
    date: "28 de Octubre, 2025",
    contentMarkdown: `La "Transformación Digital" es la palabra de moda, pero ¿qué significa realmente para tu negocio? No se trata de comprar el último software o tener presencia en redes sociales. Es un **cambio cultural y operativo profundo** que realinea tu empresa (procesos, personas y tecnología) para entregar valor a tus clientes en la era digital.

### No es Digitalizar, es Transformar

Muchas empresas cometen el error de "digitalizar" procesos rotos. Escanear un documento de facturación manual sigue siendo un proceso manual, solo que ahora es un PDF.

La **transformación real** (y lo que hacemos en Aliia Tech) es eliminar ese proceso por completo. Por ejemplo, implementar un **Sistema de Logística con conexión a SUNAT** que genere la guía de remisión y la factura electrónica automáticamente desde la orden de compra, sin intervención humana.

### Los 3 Pasos de la Transformación

Para preparar a tu empresa, debes enfocarte en tres áreas clave:

- **1. Optimización de Procesos (Back-Office):** Antes de mirar hacia afuera, hay que ordenar la casa. ¿Cómo es tu inventario? ¿Tu contabilidad? Aquí es donde entran los **Sistemas ERP** y el **Software a Medida**.
- **2. Experiencia del Cliente (Front-Office):** ¿Cómo te encuentran y cómo te compran? Esto incluye tu **E-commerce**, tus **Apps Móviles**, y tu **Marketing Conversacional (Chatbots)**.
- **3. Toma de Decisiones (Inteligencia):** ¿Estás adivinando o sabes lo que pasa? Aquí es donde brilla el **Análisis con Power BI** y la **Inteligencia Artificial**, que toman los datos de los pasos 1 y 2 para darte respuestas claras.

### El Costo de No Hacer Nada

Quedarse quieto es la decisión más riesgosa. Mientras tus competidores automatizan su soporte con IA y toman decisiones con Power BI, tu equipo sigue atrapado en tareas manuales. La transformación digital no es una opción, es una necesidad para sobrevivir y competir en la próxima década.`,
  },
];
