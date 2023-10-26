// 6 - Archivo delete.js: esta funcionalidad es bastante sencilla pero requiere de bastante lógica. Recibirá como parámetro un título, obtendrá el listado de tareas, y eliminará de ese listado la tarea cuyo title coincida con el parámetro que recibe. Finalmente deberá escribir el JSON de datos con el listado actualizado.

// 1) RECIBIR POR PARAMETRO UN 'TITULO'
// 2) LEER TODAS LAS TAREAS Y GUARDARLO EN UNA VARIABLE
// 3) RECORRER LAS TAREAS, HASTA ENCONTRAR UN TÍTULO QUE COINCOIDA CON EL TÍTULO RECIBIDO
// 4) ELIMINAR LA TAREA ENCONTRADA DEL ARRAY, Y GUARDAR EL ARRAY SIN LA TAREA
const read = require("./read");
const write = require("./write");

function deleteTask(title) {
  // leo el array de tareas
  let data = read();

  // recorro el array de tareas
  for (let i = 0; i < data.length; i++) {
    if (data[i].titulo === title) {
      data.splice(i, 1);
    }
  }

  // escribo el array de tareas
  write(data);
}

module.exports = deleteTask;
