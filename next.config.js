/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'out',
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  trailingSlash: true, // Agrega barras al final de las rutas para exportación
  output: 'export', // Configuración para exportar contenido estático
  webpack: (config, { isServer }) => {
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
