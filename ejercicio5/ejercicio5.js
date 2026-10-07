const fs = require('node:fs');

fs.readFile('../ejercicio4/archivo1.txt', leer);

console.log('última línea del programa');

function leer(error, datos) {
  if (error) {
    console.log(error);
  } else {
    console.log(datos.toString());
  }
}