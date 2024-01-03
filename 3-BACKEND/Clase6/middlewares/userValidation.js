const { body, validationResult } = require("express-validator");

const userConditions = [
  body("nombre").notEmpty().isString().withMessage("El nombre es obligatorio"),
  body("email").isEmail().withMessage("El email no es válido"),
];

const userValidationRules = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = { userConditions, userValidationRules };
