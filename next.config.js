/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export', // Configuración para generar exportación estática
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://34.46.252.163/:path*', // Redirige al backend
            },
        ];
    },
};

module.exports = nextConfig;
