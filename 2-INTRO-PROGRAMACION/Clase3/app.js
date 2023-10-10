const functionParaSaludar = require("./saludar");
const { resta } = require("./operations/resta");

functionParaSaludar();
resta(3, 2);

function sumar(a, b) {
  return a + b;
}

// saludar();

// const sumaInicial = sumar(1, 2);
// console.log(sumaInicial);

// FUNCTION CON SCOPE
const nombre = "matias";
var apellido = "camisay";
let ciudad = "san juan";
// nombre = matias
// nombre = matias
// nombre = matias
function saludarConNombre() {
  let ciudad = "mendoza";
  console.log("Hola " + nombre + " " + apellido + " " + ciudad);
}
// nombre = matias
// nombre = matias
// nombre = matias
// saludarConNombre();
// console.log(nombre);
// console.log(ciudad);

const checkNumber = function (number) {
  if (number === 2) {
    console.log("es igual a dos");
  } else {
    console.log("no es igual a dos");
  }
};

// checkNumber(2);
