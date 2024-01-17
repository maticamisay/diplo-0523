function validateUsername(req, res, next) {
  const { username } = req.body;
  if (!username || username.length < 5) {
    return res
      .status(400)
      .json({ msg: "el nombre de usuario es requerido o es demasiado corto" });
  }
  next();
}

module.exports = validateUsername;
