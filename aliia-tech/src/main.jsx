import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter.jsx';

// ---- ¡¡ESTA ES LA LÍNEA MÁS IMPORTANTE!! ----
// Asegúrate de que la ruta a tu global.css sea correcta.
// Viendo tu carpeta "styles", esta debería ser la ruta:
import './styles/global.css'; 
// ---------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
