const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.get("/api/producto", (req, res) => {
  res.send([{ id: 1, nombre: "Producto 1" }]);
});

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}...`);
});
