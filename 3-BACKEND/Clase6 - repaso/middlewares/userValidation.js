const { body } = require("express-validator");

const validateCreateUser = [
  body("nombre").isString().withMessage("El nombre debe ser un string"),
  body("email").isEmail().withMessage("El email debe ser un email válido"),
];

module.exports = { validateCreateUser };
