import React from 'react';
// 1. Importa el icono que necesitas desde la librería
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // ... (tu lógica de phoneNumber y whatsappUrl se queda igual)
  const phoneNumber = "51969980152";
  const message = "Hola, vengo de su sitio web y estoy interesado en sus servicios.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg transition duration-300 hover:bg-green-600 hover:scale-110 z-50"
      aria-label="Contactar por WhatsApp"
    >
      {/* 2. Usa el icono como un componente de React */}
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
}
  
export default WhatsAppButton;