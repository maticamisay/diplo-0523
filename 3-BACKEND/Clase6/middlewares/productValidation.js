const productValidation = (req, res, next) => {
  const product = req.body;
  if (!product.nombre || !product.precio) {
    return res.status(400).json({ message: "Faltan campos" });
  }
  next();
};

module.exports = productValidation;
