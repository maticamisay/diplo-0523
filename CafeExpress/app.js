const express = require("express");
const app = express();
const port = 3000;

// Configuración para que sea publica la carpeta public
app.use(express.static("public"));

/**
 * @description Obtiene todos los usuarios de la aplicación.
 * @route GET /usuarios
 * @returns {Array<User>} Una matriz de objetos JSON que representan a los usuarios.
 */
app.get("/usuarios", (req, res) => {
  // Obtener todos los usuarios (implementación de la lógica de obtención de datos)
  const usuarios = [
    /* ... datos de usuarios ... */
  ];

  res.json(usuarios);
});

/*
POST /usuario
Permite crear un usuario
Requiere los siguientes datos:
- nombre (string)
- apellido (string)
- edad (number)
**/
app.post("/usuario", (req, res) => {
  // crear usuario
  // ...
  res.send("Usuario creado exitosamente");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
