const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const validarNombre = (req, res, next) => {
  console.log("validando nombre...");
  const { username } = req.body;
  if (!username || username.trim() === "") {
    console.log("username esta vacio, debe retortar error");
    return res.status(400).json({ msg: "el usuario es requerido" });
  }
  next();
};

const validarContraseña = (req, res, next) => {
  console.log("validando contraseña...");
  const { password } = req.body;
  if (!password || password.trim() === "" || password.length < 6) {
    console.log("no hay contraseña, debe lanzar error");
    return res.status(400).json({ msg: "la contraseña es requerida" });
  }
  next();
};

app.post("/registro", validarNombre, validarContraseña, (req, res) => {
  console.log("en el endpoint de registro...");
  return res.json({ msg: "registro exitoso" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
