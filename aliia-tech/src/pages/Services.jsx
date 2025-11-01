function Services() {
  return (
    <section className="container">
      <h2 style={{ color: "#0047AB" }}>Nuestros Servicios</h2>
      <p style={{ margin: "15px 0 30px" }}>
        En <strong>Aliia Tech</strong> impulsamos la transformación digital de tu empresa con soluciones tecnológicas integrales, 
        desarrollo de sistemas, automatización con IA y estrategias digitales personalizadas. 
        Dividimos nuestros servicios en tres áreas especializadas para cubrir cada necesidad de tu negocio.
      </p>

      {/* --- Categoría 1 --- */}
      <h3 style={{ color: "#00C1D4" }}>💻 Sistemas y Cloud</h3>
      <ul style={{ marginBottom: "30px" }}>
        <li>➡️ Desarrollo de sistemas empresariales y logísticos integrados con SUNAT</li>
        <li>➡️ Aplicaciones móviles personalizadas (Android / iOS)</li>
        <li>➡️ Servicios en la nube (AWS, backups, infraestructura)</li>
        <li>➡️ Automatizaciones con Inteligencia Artificial</li>
        <li>➡️ Sistemas de mesa de ayuda y soporte técnico</li>
        <li>➡️ Generadores automáticos de certificados educativos</li>
      </ul>

      {/* --- Categoría 2 --- */}
      <h3 style={{ color: "#00C1D4" }}>🛍️ Web, E-commerce & Marketing</h3>
      <ul style={{ marginBottom: "30px" }}>
        <li>➡️ Tiendas online y plataformas E-commerce modernas</li>
        <li>➡️ Websites para agencias de turismo, hoteles y constructoras</li>
        <li>➡️ Sistemas de reservas y chatbots inteligentes</li>
        <li>➡️ Marketing digital conversacional (Facebook, Instagram, WhatsApp)</li>
        <li>➡️ SEO y posicionamiento web profesional</li>
      </ul>

      {/* --- Categoría 3 --- */}
      <h3 style={{ color: "#00C1D4" }}>🚀 Consultoría e Innovación</h3>
      <ul>
        <li>➡️ Transformación digital (Microsoft, Excel, Power BI)</li>
        <li>➡️ Asesoría para formalizar y optimizar tu empresa</li>
        <li>➡️ Análisis de seguridad informática y ciberprotección</li>
        <li>➡️ Diseño de interiores y renderización arquitectónica</li>
      </ul>

      <p style={{ marginTop: "30px", fontWeight: "500" }}>
        🚀 En Aliia Tech, no solo creamos soluciones, transformamos ideas en resultados medibles.
      </p>
    </section>
  );
}

export default Services;
