const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

// http://localhost:3000/productos/34141
app.use("/productos", require("./routes/productsRoutes"));

// http://localhost:3000/hola?query=termino&order=price_mayor
app.get("/hola", (req, res) => {
  console.log(req.query);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
