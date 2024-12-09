/** @type {import('next').NextConfig} */

// Configuración para PWA (Progressive Web App)
const withPWA = require('next-pwa')({
  dest: 'public', // Directorio donde se generarán los archivos del PWA
  register: true, // Registra el Service Worker automáticamente
  skipWaiting: true, // Omite el "waiting" y activa el nuevo Service Worker automáticamente
});

const nextConfig = withPWA({
  reactStrictMode: true, // Habilita React en modo estricto para detectar problemas
  trailingSlash: false, // No agregar barras al final de las rutas
  webpack: (config, { isServer }) => {
    // Configuración para evitar errores al compilar librerías específicas en el cliente
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        fs: false,
      };
    }
    return config;
  },
});

module.exports = nextConfig;
