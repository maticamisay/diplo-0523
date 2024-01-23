const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");
const router = express.Router();

// GET: /usuarios/ver-usuarios obtiene todos los usuarios
router.get("/ver-usuarios", getAllUsers);

// GET: /usuarios/:idUsuario obtiene un usuario
router.get("/:idUsuario", getUserById);

// POST: /usuarios crear un usuario en la base de datos
router.post("/", createUser);

// PUT: /usuarios/:idUsuario edita un usuario existente en la db
router.put("/:idUsuario", updateUser);

// DELETE: /usuarios/:idUsuario elimina un usuario existente
router.delete("/:idUsuario", deleteUser);

// exportacion por default de router
module.exports = router;
