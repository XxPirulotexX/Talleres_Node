// Importar Express
const express = require('express');
const path = require('path'); // Módulo para manejar rutas de archivos
const app = express();
const puerto = 3000;

// --- Ruta que sirve el archivo HTML ---
app.get('/', (req, res) => {
  // Envía el archivo index.html que está en la misma carpeta
  res.sendFile(path.join(__dirname, 'index.html'));
});

// --- Iniciar el servidor ---
app.listen(puerto, () => {
  console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
});