const personaJSON = require("./data.json");
console.log(personaJSON.nombre);

const persona = {
  // String
  nombre: "Matias",
  // Number
  edad: 24,
  // String
  rol: "profesor",
  // Array of strings
  habitos: ["toca la guitarra", "programa en javascript", "sale a correr"],
  // Boolean
  casado: false,
  // Object
  direccion: {
    calle: "Avenida Siempre Viva",
    numero: 742,
    ciudad: "Springfield",
  },
  // Array of objects
  comidasFavoritas: [
    { nombre: "asado", puntuacion: 10 },
    { nombre: "pizza", puntuacion: 8 },
    { nombre: "lasaña", puntuacion: 6 },
    { nombre: "fideos", puntuacion: 9 },
  ],
};

const comidasFavoritas = personaJSON.comidasFavoritas;
const tamanioArrayComidas = comidasFavoritas.length;
const comidasMayoresQueOcho = [];
for (let i = 0; i < tamanioArrayComidas; i++) {
  if (comidasFavoritas[i].puntuacion > 8) {
    comidasMayoresQueOcho.push(comidasFavoritas[i]);
  }
}

console.log(comidasMayoresQueOcho);
