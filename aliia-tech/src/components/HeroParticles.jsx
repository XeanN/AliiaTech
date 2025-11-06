    // src/components/HeroParticles.jsx

    import React, { useCallback } from 'react';
    import Particles from 'react-tsparticles';
    import { loadSlim } from 'tsparticles-slim'; // Carga la versión ligera

    const HeroParticles = () => {
    // Función para inicializar el motor de partículas
    const particlesInit = useCallback(async (engine) => {
        // Carga el paquete 'slim'
        await loadSlim(engine);
    }, []);

    // Opciones de configuración para las partículas (para que parezcan estrellas)
    const particlesOptions = {
        background: {
        color: {
            value: 'transparent', // El fondo lo manejaremos con CSS en Home.jsx
        },
        },
        fpsLimit: 60,
        interactivity: {
        events: {
            onHover: {
            enable: true,
            mode: 'repulse', // Hace que las partículas se alejen del cursor
            },
            resize: true,
        },
        modes: {
            repulse: {
            distance: 100,
            duration: 0.4,
            },
        },
        },
        particles: {
        color: {
            value: '#ffffff', // Color de las partículas: blanco
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: false, // Desactivamos las líneas entre partículas
            opacity: 0.1,
            width: 1,
        },
        collisions: {
            enable: false,
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
            default: 'out',
            },
            random: true, // Movimiento aleatorio
            speed: 0.3, // Velocidad de movimiento lenta
            straight: false,
        },
        number: {
            density: {
            enable: true,
            area: 800,
            },
            value: 100, // Cantidad de partículas
        },
        opacity: {
            value: { min: 0.1, max: 0.5 }, // Opacidad aleatoria
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        shape: {
            type: 'circle', // Forma de la partícula
        },
        size: {
            value: { min: 1, max: 2 }, // Tamaño aleatorio
            anim: { enable: false }
        },
        },
        detectRetina: true,
    };

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute top-0 left-0 w-full h-full z-0" // Posiciona las partículas en el fondo
        />
    );
    };

    export default HeroParticles;