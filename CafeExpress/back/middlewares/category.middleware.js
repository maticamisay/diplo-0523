const { check, validationResult } = require("express-validator");

const validateCategory = [
  check("nombre").notEmpty().withMessage("El nombre es requerido"),
  check("nombre")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener al menos 3 caracteres"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateCategory,
};
