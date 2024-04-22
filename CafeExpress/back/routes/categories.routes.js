const express = require("express");
const {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories.controllers");
const router = express.Router();

router.get("/", getAllCategories);
router.get("/:idCategoria", getCategoryById);
router.post("/", createCategory);
router.put("/:idCategoria", updateCategory);
router.delete("/:idCategoria", deleteCategory);

module.exports = router;
