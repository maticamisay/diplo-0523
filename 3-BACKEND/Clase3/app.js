const express = require("express");
const app = express();
const port = 3000;
const productosDb = require("./productos.json");

app.set("view engine", "ejs");
app.use("/archivos-publicos", express.static("public"));

app.get("/:nombre", (req, res) => {
  const { nombre } = req.params;
  res.render("home", { nombre: nombre });
});

app.get("/producto/:idProducto", (req, res) => {
  const { idProducto } = req.params;
  const producto = productosDb.find((producto) => producto.id == idProducto);
  res.render("producto", {
    nombreProducto: producto.nombre,
    precioProducto: producto.precio,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
