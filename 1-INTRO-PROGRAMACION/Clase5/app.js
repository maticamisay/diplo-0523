// const comando = process.argv[2];

// switch (comando) {
//   case "crear":
//     console.log("El comando ingresado es crear");
//     console.log("El título de la nota es: " + process.argv[3]);
//     break;
//   case "listar":
//     console.log("El comando ingresado es listar");
//     break;
//   default:
//     console.log("No ingresaste un comando válido");
//     break;
// }

const list = require("./comandos/list");

list();
