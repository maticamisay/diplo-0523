const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");
const {
  validateUser,
  validateUserId,
} = require("../middlewares/user.middleware");
const router = express.Router();

// obtiene todos los usuarios
router.get("/", getAllUsers);

// obtiene un usuario por id
router.get("/:id", validateUserId, getUserById);

// crea un usuario
router.post("/", validateUser, createUser);

// actualiza un usuario
router.put("/:id", validateUser, validateUserId, updateUser);

// elimina un usuario
router.delete("/:id", validateUserId, deleteUser);

module.exports = router;
