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

router.get("/", getAllUsers);
router.get("/:id", validateUserId, getUserById);
router.post("/", validateUser, createUser);
router.put("/:id", validateUser, validateUserId, updateUser);
router.delete("/:id", validateUserId, deleteUser);

module.exports = router;
