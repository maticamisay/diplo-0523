const User = require("../models").User;

const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

async function getUserById(req, res) {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
}

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });
  res.json(user);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
