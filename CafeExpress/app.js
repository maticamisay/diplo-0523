const express = require("express");
const app = express();
const port = 3000;

// Configuración para que sea publica la carpeta public
app.use(express.static("public"));

app.post("/usuarios", (req, res) => {
  res.send("POST a /usuarios");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
