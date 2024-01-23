# Resolución de TP 1 y 2

# Trabajo Práctico Nro 1

```js
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/usuarios", (req, res) => {
  const { usuario, password } = req.body;
  console.log({ usuario, password });
  res.send("usuario creado");
});

app.post("/productos", (req, res) => {
  const { nombre, precio } = req.body;
  console.log({ nombre, precio });
  res.send("producto creado");
});

app.get("/productos", (req, res) => {
  res.send("productos desde db");
});

app.listen(PORT, () => {
  console.log("server running");
});
```
