import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter.jsx'; 
import './styles/global.css'; 

// --- ¡Importamos AOS aquí! ---
import AOS from 'aos';

// Lo iniciamos una sola vez al cargar la web
AOS.init({
  duration: 700,  // Duración
  once: true,     // Solo una vez
  offset: 100,    // Se activa un poco antes
});
// ------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter /> 
  </React.StrictMode>
);