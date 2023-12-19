const { getProductById } = require("../models/productModel");

const getProduct = (req, res) => {
  const idProducto = req.params.idProducto;
  const producto = getProductById(idProducto);
  res.render("producto", { producto: producto });
};

module.exports = {
  getProduct,
};
