const fileSystem = require("fs");

function leerJson() {
  let data = fileSystem.readFileSync("./data.json", "utf-8");
  let dataParse = JSON.parse(data);
  return dataParse;
}

module.exports = leerJson;
