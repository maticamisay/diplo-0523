const auth = (req, res, next) => {
  const userAccount = req.body;
  if (userAccount.rol !== "admin") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

module.exports = auth;
