const express = require("express");
const { getProduct } = require("../controllers/productsController");
const router = express.Router();

router.get("/:idProducto", getProduct);

module.exports = router;
