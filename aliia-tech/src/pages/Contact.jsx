import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import emailjs from '@emailjs/browser';
import PageHeader from '../components/PageHeader.jsx'; 
import { servicesArray } from '../data/servicesData.jsx'; 

// --- Iconos (mantén los mismos) ---
const PhoneIcon = () => (
  <svg className="w-6 h-6 text-accent-start" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);
const MailIcon = () => (
  <svg className="w-6 h-6 text-accent-start" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const LocationIcon = () => (
  <svg className="w-6 h-6 text-accent-start" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-text-muted">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

function Contact() {
  
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    company: '',
    service: '',
    message: ''
  });
  const [honeypot, setHoneypot] = useState(''); // 🍯 Campo anti-bot
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  
  const location = useLocation(); 
  const selectRef = useRef(null); 
  const formRef = useRef(null);
  
  const EMAILJS_SERVICE_ID = 'service_ne28a3l';
  const EMAILJS_TEMPLATE_ID = 'template_pzav1mg';
  const EMAILJS_PUBLIC_KEY = 'gMTM9mp6-Xd4n8u73';

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceSlug = params.get('servicio'); 
    const hash = location.hash;

    if (serviceSlug && selectRef.current) {
      selectRef.current.value = serviceSlug;
      setFormData(prev => ({ ...prev, service: serviceSlug }));
    }
    
    if (hash === '#formulario') {
      const element = document.getElementById('formulario');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🍯 PROTECCIÓN HONEYPOT: Si el campo oculto tiene algo, es un bot
    if (honeypot) {
      console.log('🚫 Bot detectado - Envío bloqueado');
      setSendStatus('error');
      return;
    }

    setIsSending(true);
    setSendStatus(null);

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      console.log('✅ Email enviado:', result.text);

      const serviceText = formData.service 
        ? servicesArray.find(s => s.slug === formData.service)?.title || formData.service
        : 'Consulta General';

      const whatsappMessage = `
🙋‍♂️ *Nombre:* ${formData.from_name}
📧 *Email:* ${formData.from_email}
🏢 *Empresa:* ${formData.company || 'No especificado'}
💼 *Servicio de interés:* ${serviceText}

📝 *Mensaje:*
${formData.message}
      `.trim();

      const whatsappURL = `https://wa.me/51969980152?text=${encodeURIComponent(whatsappMessage)}`;
      
      setSendStatus('success');
      
      setTimeout(() => {
        window.open(whatsappURL, '_blank');
      }, 1000);

      setFormData({
        from_name: '',
        from_email: '',
        company: '',
        service: '',
        message: ''
      });
      formRef.current.reset();

    } catch (error) {
      console.error('❌ Error al enviar:', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <PageHeader 
        title="Contáctanos"
        subtitle="Estamos aquí para ayudarte a transformar tu negocio con tecnología."
        imageUrl="/Hero_Contacto.jpg"
      />

      <section className="content-card" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div 
              id="formulario" 
              className="bg-dark-card p-8 rounded-xl shadow-lg border border-gray-700 scroll-mt-24"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Envíanos un mensaje
              </h2>

              {sendStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-400 animate-pulse">
                  ✅ ¡Mensaje enviado! Abriendo WhatsApp...
                </div>
              )}
              {sendStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-400">
                  ❌ Hubo un error al enviar. Por favor, intenta de nuevo o contáctanos por WhatsApp directamente.
                </div>
              )}

              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* 🍯 HONEYPOT - Campo oculto anti-bots */}
                <input 
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ 
                    position: 'absolute',
                    left: '-9999px',
                    width: '1px',
                    height: '1px'
                  }}
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-text-muted">
                    Nombre completo *
                  </label>
                  <input 
                    type="text" 
                    name="from_name"
                    id="from_name" 
                    value={formData.from_name}
                    onChange={handleChange}
                    required 
                    className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-start focus:border-accent-start transition" 
                    placeholder="Ej: Juan Pérez"
                  />
                </div>
                
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-text-muted">
                    Correo electrónico *
                  </label>
                  <input 
                    type="email" 
                    name="from_email"
                    id="from_email" 
                    value={formData.from_email}
                    onChange={handleChange}
                    required 
                    className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-start focus:border-accent-start transition" 
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-muted">
                    Nombre de empresa (opcional)
                  </label>
                  <input 
                    type="text" 
                    name="company"
                    id="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-start focus:border-accent-start transition" 
                    placeholder="Tu Empresa S.A."
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-muted">
                    ¿Sobre qué servicio quieres consultar? *
                  </label>
                  <div className="relative mt-1">
                    <select 
                      ref={selectRef}
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required 
                      className="appearance-none block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-start focus:border-accent-start transition"
                    >
                      <option value="">Selecciona un servicio...</option>
                      
                      {servicesArray.map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.title}
                        </option>
                      ))}
                      
                      <option value="otro">Otro / Consultoría General</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                      <ChevronDownIcon />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-muted">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="mt-1 block w-full px-4 py-3 bg-gray-900 border border-gray-700 text-text-light rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-start focus:border-accent-start transition resize-none" 
                    placeholder="Describe tu proyecto, necesidades o consultas..."
                  />
                </div>

                <div>
                  <button 
                    type="submit" 
                    disabled={isSending}
                    className="w-full bg-gradient-to-r from-accent-start to-accent-end text-dark-bg font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSending ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      '📩 Enviar Mensaje'
                    )}
                  </button>
                </div>

                <p className="text-xs text-text-muted text-center">
                  Al enviar, te contactaremos por correo y te redirigiremos a WhatsApp
                </p>
              </form>
            </div>

            {/* Información de Contacto (mantén igual) */}
            <div className="pt-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Información de Contacto
              </h2>
              <p className="text-lg text-text-muted mb-8">
                También puedes contactarnos directamente por estos medios. Estaremos encantados de atenderte.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/51969980152" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start hover:bg-gray-800/50 p-4 rounded-lg transition group"
                >
                  <div className="flex-shrink-0 bg-dark-card text-accent-start p-3 rounded-full group-hover:scale-110 transition">
                    <PhoneIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Teléfono / WhatsApp</h3>
                    <p className="text-text-muted group-hover:text-accent-start transition">+51 969 980 152</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@aliiatech.com"
                  className="flex items-start hover:bg-gray-800/50 p-4 rounded-lg transition group"
                >
                  <div className="flex-shrink-0 bg-dark-card text-accent-start p-3 rounded-full group-hover:scale-110 transition">
                    <MailIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Correo Electrónico</h3>
                    <p className="text-text-muted group-hover:text-accent-start transition">info@aliiatech.com</p>
                  </div>
                </a>

                <div className="flex items-start p-4">
                  <div className="flex-shrink-0 bg-dark-card text-accent-start p-3 rounded-full">
                    <LocationIcon />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Ubicación</h3>
                    <p className="text-text-muted">Lima, Perú</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">
                  ⏰ Horario de Atención
                </h3>
                <p className="text-text-muted">
                  Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                  Sábados: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
  
export default Contact;