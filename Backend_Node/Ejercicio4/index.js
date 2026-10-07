// Importar Express
const express = require('express');
const app = express();
const puerto = 3000;

// --- MIDDLEWARE DE REGISTRO ---
// Este middleware se ejecuta ANTES de todas las rutas
// --- MIDDLEWARE DE REGISTRO (con IP) ---
app.use((req, res, next) => {
  console.log('--- Nueva petición ---');
  console.log('Hora:', new Date().toLocaleTimeString());
  console.log('Método:', req.method);
  console.log('Ruta:', req.url);
  console.log('IP del usuario:', req.ip); // <-- Nueva línea
  console.log('---------------------');
  next();
});

// --- Rutas de prueba ---
app.get('/', (req, res) => {
  res.send('Página principal');
});

app.get('/usuarios', (req, res) => {
  res.send('Lista de usuarios');
});

// --- Reto adicional: Ruta de productos ---
app.get('/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Laptop HP', precio: 2500000 },
    { id: 2, nombre: 'Mouse Logitech', precio: 80000 },
    { id: 3, nombre: 'Teclado Mecánico', precio: 250000 },
    { id: 4, nombre: 'Monitor Samsung 24"', precio: 900000 }
  ];
  res.json(productos);
});

// --- Iniciar el servidor ---
app.listen(puerto, () => {
  console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
});