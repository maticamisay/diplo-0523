const { addUser, findByID, findAll, update } = require("../model/User");
const { uuid } = require("uuidv4");

const getAllUsers = (req, res) => {
  const users = findAll();
  res.json({ data: users });
};

const getUserById = (req, res) => {
  const { idUsuario } = req.params;
  const user = findByID(idUsuario);
  res.json({ data: user });
};
 
const createUser = (req, res) => {
  const { usuario, password } = req.body;
  const newUser = {
    id: uuid(),
    user: usuario,
    password,
  };
  addUser(newUser);
  res.json({ msg: "usuario creado con exito", data: newUser });
};

const updateUser = (req, res) => {
  const { idUsuario } = req.params;
  const { usuario, password } = req.body;
  const newUser = {
    user: usuario,
    password,
  };
  update(idUsuario, newUser);
  res.json({ msg: "usuario editado correctamente" });
};

const deleteUser = (req, res) => {
  const { idUsuario } = req.params;
  res.send(`usuario id: ${idUsuario}, eliminado`);
};

// exportamos un objeto de funciones
module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
};
