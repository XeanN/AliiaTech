/** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // 🎨 Colores personalizados de Aliia Tech
            colors: {
                'dark-bg': '#111827',
                'dark-card': '#1f2937',
                'primary': '#0047AB',
                'accent-start': '#00C1D4',
                'accent-end': '#10b981',
                'text-light': '#E5E7EB',
                'text-muted': '#9CA3AF',
            },

            // 🎞️ Animaciones personalizadas
            keyframes: {
                menuFadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
                },
            },
            animation: {
                menuFadeIn: 'menuFadeIn 0.3s ease-out forwards',
            },
        }
    },
    plugins: [],
    }

    // <-- ¡BORRÉ EL module.exports DUPLICADO DE AQUÍ ABAJO!