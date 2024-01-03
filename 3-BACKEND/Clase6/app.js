const express = require("express");
const auth = require("./middlewares/auth");
const productValidation = require("./middlewares/productValidation");
const morgan = require("morgan");
const errMiddleware = require("./middlewares/err");
const {
  userConditions,
  userValidationRules,
} = require("./middlewares/userValidation");
const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// middleware de validación
app.post("/producto", productValidation, (req, res) => {
  res.json({ message: "Producto agregado" });
});

// middleware de autenticación y autorización
app.get("/admin", auth, (req, res) => {
  res.send("Hello Admin!");
});

function createUser(user) {
  // si el usuario no tiene email, retornar false
  if (!user.email) {
    return false;
  }
  return true;
}

// probando middleware de error y usando express-validator
app.post("/usuarios", userConditions, userValidationRules, (req, res, next) => {
  const user = req.body;

  const result = createUser(user); //result va a ser true o false
  // si es true, se transformará en false debido a !result
  // si es false, se transformará en true debido a !result
  if (!result) {
    const err = new Error("Error creando el usuario");
    err.statusCode = 400;
    next(err);
    return;
  }

  res.json({ message: "Usuario creado" });
});

// middleware de error
app.use(errMiddleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
