    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

        // tailwind.config.js
    module.exports = {
    theme: {
        extend: {
        keyframes: {
            menuFadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
            },
        },
        animation: {
            menuFadeIn: 'menuFadeIn 0.3s ease-out forwards',
        },
        },
    },
    plugins: [],
    }