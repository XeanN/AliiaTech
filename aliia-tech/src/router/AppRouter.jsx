import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import WhatsAppButton from "../components/WhatsAppButton";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
