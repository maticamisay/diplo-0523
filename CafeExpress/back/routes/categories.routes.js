const express = require("express");
const {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories.controllers");
const { validateCategory } = require("../middlewares/category.middleware");
const router = express.Router();

router.get("/", getAllCategories);
router.get("/:idCategoria", getCategoryById);
router.post("/", validateCategory, createCategory);
router.put("/:idCategoria", validateCategory, updateCategory);
router.delete("/:idCategoria", deleteCategory);

module.exports = router;
