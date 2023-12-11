const express = require("express");
const routerUsuarios = express.Router();
const { getAll, getById, create } = require("../controllers/user-controllers");

routerUsuarios.get("/", getAll);
routerUsuarios.get("/:idUsuario", getById);
routerUsuarios.post("/create", create);
routerUsuarios.post("/login", getAll);
routerUsuarios.put("/change-password", getAll);
routerUsuarios.delete("/delete-user", getAll);

module.exports = routerUsuarios;
