function Blog() {
  return (
    <section className="container">
      <h2 style={{ color: "#0047AB" }}>Blog & Novedades</h2>
      <p style={{ margin: "15px 0 30px" }}>
        Aprende sobre innovación, inteligencia artificial, marketing y transformación digital. 
        Descubre nuestras publicaciones, guías y casos de éxito para inspirarte y aplicar nuevas estrategias en tu negocio.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px" }}>
        <article className="blog-card">
          <img src="/assets/img/blog1.jpg" alt="IA y negocios" className="blog-img" />
          <h3>Cómo la Inteligencia Artificial está transformando las empresas</h3>
          <p>Explora cómo las herramientas de IA pueden ayudarte a automatizar tareas y aumentar tus ventas.</p>
          <a href="#" className="read-more">Leer más →</a>
        </article>

        <article className="blog-card">
          <img src="/assets/img/blog2.jpg" alt="E-commerce tips" className="blog-img" />
          <h3>5 estrategias clave para posicionar tu tienda online</h3>
          <p>Optimiza tu e-commerce con SEO, automatización y estrategias digitales modernas.</p>
          <a href="#" className="read-more">Leer más →</a>
        </article>

        <article className="blog-card">
          <img src="/assets/img/blog3.jpg" alt="Transformación digital" className="blog-img" />
          <h3>Transformación digital: cómo preparar tu empresa para el futuro</h3>
          <p>Descubre los pasos esenciales para digitalizar tus operaciones y mantener tu competitividad.</p>
          <a href="#" className="read-more">Leer más →</a>
        </article>
      </div>
    </section>
  );
}

export default Blog;
