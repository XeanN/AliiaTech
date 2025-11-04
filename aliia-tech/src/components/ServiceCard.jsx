    import React from 'react';

    // Este es el componente reutilizable para cada tarjeta de servicio
    // 'icon' será un SVG, 'title' y 'description' son texto
    function ServiceCard({ icon, title, description }) {
    return (
        // Tarjeta: fondo blanco, sombra, bordes redondeados, padding
        <div className="bg-white shadow-lg rounded-xl p-8 transition-all hover:shadow-xl hover:-translate-y-1">
        {/* Círculo del Ícono */}
        <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            {icon}
        </div>
        {/* Título */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {title}
        </h3>
        {/* Descripción */}
        <p className="text-gray-600 leading-relaxed">
            {description}
        </p>
        </div>
    );
    }

    export default ServiceCard;