import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router/AppRouter.jsx'; 
import './styles/global.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; // ⬅️ IMPORTANTE: Importa el CSS de AOS

AOS.init({
  duration: 700,
  once: true,
  offset: 100,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);  