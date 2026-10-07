// Importar Express
const express = require('express');
const app = express();
const puerto = 3000;

// --- Ruta con parámetro :nombre ---
// URL de ejemplo: http://localhost:3000/saludar/nombre
app.get('/saludar/:nombre', (req, res) => {
  const nombre = req.params.nombre; // Captura el valor del parámetro
  res.send(`Hola ${nombre}, el servidor funciona correctamente`);
});

// --- Reto adicional: Ruta para calcular el cuadrado ---
// URL de ejemplo: http://localhost:3000/cuadrado/5
app.get('/cuadrado/:numero', (req, res) => {
  const numero = parseFloat(req.params.numero); // Convertir el parámetro a número
  const cuadrado = numero * numero;
  res.send(`El cuadrado de ${numero} es ${cuadrado}`);
});

// --- Iniciar el servidor ---
app.listen(puerto, () => {
  console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
});