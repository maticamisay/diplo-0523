const express = require("express");
const {
  getAllCategories,
  createCategory,
} = require("../controllers/categories.controllers");
const router = express.Router();

router.get("/", getAllCategories);
router.post("/", createCategory);

module.exports = router;
