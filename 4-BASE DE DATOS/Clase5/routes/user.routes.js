const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
} = require("../controllers/user.controllers");
const router = express.Router();

// obtiene todos los usuarios
router.get("/", getAllUsers);

// obtiene un usuario por id
router.get("/:id", getUserById);

// crea un usuario
router.post("/", createUser);

module.exports = router;
