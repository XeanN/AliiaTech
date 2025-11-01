function Contact() {
  return (
    <section className="container">
      <h2 style={{ color: "#0047AB" }}>Contáctanos</h2>
      <p style={{ margin: "15px 0 30px" }}>
        Estamos aquí para ayudarte a transformar tu negocio con tecnología. 
        Completa el siguiente formulario o escríbenos por WhatsApp, y uno de nuestros asesores se pondrá en contacto contigo.
      </p>

      <form
        style={{
          maxWidth: "600px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="text" placeholder="Nombre de empresa (opcional)" />
        <select required>
          <option value="">Selecciona un servicio</option>
          <option>Sistemas y Cloud</option>
          <option>Web & Marketing</option>
          <option>Consultoría e Innovación</option>
        </select>
        <textarea
          placeholder="Cuéntanos sobre tu proyecto..."
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          style={{
            background: "#0047AB",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Enviar mensaje
        </button>
      </form>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <p>📍 Lima, Perú</p>
        <p>📞 +51 969980152</p>
        <p>📧 contacto@aliiia.tech</p>
      </div>
    </section>
  );
}

export default Contact;
