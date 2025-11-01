import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="container">
      <h1>Aliia Tech</h1>
      <p>Innovamos tu empresa con tecnología, IA y soluciones digitales.</p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/servicios" className="cta-button">Explorar servicios</Link>
        <Link to="/contacto" className="cta-button-outline">Cotiza aquí</Link>
      </div>
    </section>
  );
}

export default Home;
