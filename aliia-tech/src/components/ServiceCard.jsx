    import React from 'react';

    // ¡Actualizado para el tema oscuro!
    // Ahora las tarjetas son de color gris oscuro
    function ServiceCard({ icon, title, description }) {
    return (
        <div className="bg-dark-card p-8 rounded-xl shadow-xl border border-gray-700">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-900 text-white">
            {icon}
            </div>
        </div>
        <h3 className="text-2xl font-bold text-white mt-6">{title}</h3>
        <p className="text-text-muted mt-3">{description}</p>
        </div>
    );
    }

    export default ServiceCard;