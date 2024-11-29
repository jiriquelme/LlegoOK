// Importación de módulos necesarios
const express = require('express');
const next = require('next');
const cors = require('cors');

// Configuración del puerto y del modo de desarrollo
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

// Inicialización de la aplicación Next.js
const app = next({ dev });
const handle = app.getRequestHandler();

// Preparación y configuración del servidor Express
app.prepare().then(() => {
  const server = express();

  // Configuración de CORS para permitir solicitudes desde el frontend
  server.use(cors({
    origin: 'http://localhost:3000', // Ajusta según sea necesario
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
  }));

  // Manejo de todas las solicitudes a través del gestor de Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Inicio del servidor
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
