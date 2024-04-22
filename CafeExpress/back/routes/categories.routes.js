const express = require("express");
const { getAllCategories } = require("../controllers/categories.controllers");
const router = express.Router();

router.get("/", getAllCategories);

module.exports = router;
