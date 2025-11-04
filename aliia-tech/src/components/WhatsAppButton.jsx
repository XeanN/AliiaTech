import React from 'react';

const WhatsAppButton = () => {
  // --- ¡IMPORTANTE! ---
  // Reemplaza "51999999999" con tu número de teléfono real.
  // Incluye el código de país (51 para Perú) sin el '+'.
  const phoneNumber = "51969980152"; // Usando el número que vi en tu código de Contacto
  
  // Mensaje predeterminado opcional
  const message = "Hola, vengo de su sitio web y estoy interesado en sus servicios.";
  
  // Construye la URL de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg transition duration-300 hover:bg-green-600 hover:scale-110 z-50"
      aria-label="Contactar por WhatsApp"
    >
      {/* Icono de WhatsApp SVG */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-8 h-8"
      >
        <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.7-.8.9-.1.1-.3.1-.5 0-.2-.1-1-.4-1.9-1.1-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.2.4-.4.1-.1.2-.2.2-.4.1-.1 0-.3-.1-.4-.1-.1-.6-2.3-.8-3.1-.2-.8-.4-.7-.6-.7h-.5c-.2 0-.5.1-.7.3-.2.2-.8.8-.8 1.9 0 1.1.8 3.1 1 3.3.1.2 1.5 2.3 3.6 3.2.5.2.9.4 1.2.5.5.1.9.1 1.2.1.4-.1 1.1-.5 1.3-1 .2-.5.2-.9.1-1zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;