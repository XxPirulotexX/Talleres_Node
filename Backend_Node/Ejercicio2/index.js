// Importar el módulo Express
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto
const puerto = 3000;

// --- Ruta que devuelve datos en formato JSON ---
// URL: http://localhost:3000/api/usuario
app.get('/api/usuario', (req, res) => {
  // Usamos res.json() en lugar de res.send() para enviar un objeto JSON
  res.json({
    nombre: "Felipe Olarte", 
    programa: "Ingeniería de Sistemas", 
    semestre: 6,
    correo: "felipe@correo.com"
  });
});

// --- Reto adicional: Ruta que devuelve una lista de usuarios ---
// URL: http://localhost:3000/api/usuarios
app.get('/api/usuarios', (req, res) => {
  const listaUsuarios = [
    {
      id: 1,
      nombre: "Ana Gómez",
      programa: "Ingeniería de Software",
      semestre: 6,
      correo: "ana@correo.com"
    },
    {
      id: 2,
      nombre: "Carlos Ruiz",
      programa: "Ingeniería de Sistemas",
      semestre: 4,
      correo: "carlos@correo.com"
    },
    {
      id: 3,
      nombre: "Luisa Martínez",
      programa: "Ciencia de Datos",
      semestre: 8,
      correo: "luisa@correo.com"
    }
  ];

  res.json(listaUsuarios);
});

// --- Iniciar el Servidor ---
app.listen(puerto, () => {
  console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
});