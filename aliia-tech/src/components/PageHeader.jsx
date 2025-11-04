    import React from 'react';

    // Aceptamos "imageUrl" como un prop para la imagen de fondo
    function PageHeader({ title, subtitle, imageUrl }) {
    
    // Si no nos pasan una imagen, usamos una por defecto
    const defaultImage = 'https://placehold.co/1920x400/0284c7/white?text=Aliia+Tech';
    
    return (
        <section className="h-[40vh] min-h-[300px] flex items-center justify-center relative text-white">
        {/* 1. Imagen de Fondo (¡Usa el prop o el default!) */}
        <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url('${imageUrl || defaultImage}')` }}
        ></div>
        
        {/* 2. Capa de Oscurecimiento */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* 3. Contenido (Título y Subtítulo) */}
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto">
            {title}
            </h1>
            {subtitle && (
            <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
                {subtitle}
            </p>
            )}
        </div>
        </section>
    );
    }

    export default PageHeader;