import { Link } from "react-router-dom";
import "../styles/components.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Aliia Tech</div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
