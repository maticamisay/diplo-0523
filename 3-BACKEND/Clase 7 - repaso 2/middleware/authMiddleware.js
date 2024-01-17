function authMiddleware(req, res, next) {
  const { username } = req.session;
  if (!username) {
    return res.status(400).json({ msg: "debes iniciar sesion" });
  }
  console.log(username);
  next();
}

module.exports = authMiddleware;
