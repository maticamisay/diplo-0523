const tasks = require("../taskData");

function getTitles() {
  let vector = [];
  for (let i = 0; i < tasks.length; i++) {
    // vector[i] = tasks[i].titulo;
    // vector.push(tasks[i].titulo);
    vector.splice(i, 0, tasks[i].titulo);
  }
  console.log(vector);
}

module.exports = getTitles;
