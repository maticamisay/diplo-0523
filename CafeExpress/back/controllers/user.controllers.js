const User = require("../models/User");

function getAllUsers(req, res) {
  const users = User.findAll();
  res.json(users);
}

function getUserById(req, res) {
  const id = req.params.id;
  const user = User.findByID(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
}

function createUser(req, res) {
  const newUser = req.body;
  User.addUser(newUser);
  res.status(201).json({ message: "User created" });
}

function updateUser(req, res) {
  const id = req.params.id;
  const updatedUser = req.body;
  User.update(id, updatedUser);
  res.json({ message: "User updated" });
}

function deleteUser(req, res) {
  const id = req.params.id;
  User.delete(id);
  res.json({ message: "User deleted" });
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
