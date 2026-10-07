// Importar el módulo Express
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto en el que escuchará el servidor
const puerto = 3000;

// --- Definición de Rutas ---

// Ruta principal: http://localhost:3000/
app.get('/', (req, res) => {
  res.send('Bienvenido al servidor backend');
});

// Ruta de saludo: http://localhost:3000/saludo
app.get('/saludo', (req, res) => {
  res.send('Hola, bienvenido al backend');
});

// Ruta de autor: http://localhost:3000/autor
app.get('/autor', (req, res) => {
  res.send('Autor: Duvan');
});

// Ruta de fecha: http://localhost:3000/fecha
app.get('/fecha', (req, res) => {
  const fechaActual = new Date();
  res.send(`La fecha y hora actual del servidor es: ${fechaActual.toLocaleString()}`);
});

// --- Iniciar el Servidor ---
app.listen(puerto, () => {
  console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
});

