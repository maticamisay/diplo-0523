// const fs = require("fs");

// const comando = process.argv[2];
// const titulo = process.argv[3];
// const descripcion = process.argv[4];

// switch (comando) {
//   case "leer":
//     const tareasLeida = fs.readFileSync("./tareas.json", "utf-8");
//     const tareasParseada = JSON.parse(tareasLeida);
//     console.log(tareasParseada);
//     break;
//   case "crear":
//     console.log("intentando crear tarea");
//     const tarea = { titulo, descripcion };
//     console.log(tarea);
//     fs.writeFileSync("./tareas.json", JSON.stringify(tarea, null, 2));
//     break;
//   case "eliminar":
//     console.log("intentando eliminar una tarea");
//     console.log({ titulo });
//     break;
//   default:
//     console.log("no se reconoce el comando, intenta nuevamente");
//     break;
// }

const deleteTask = require("./crud/delete");
const read = require("./crud/read");

const data = read();
console.log(data);

// deleteTask("estudiar");
