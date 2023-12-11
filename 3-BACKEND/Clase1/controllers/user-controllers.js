const users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Jane",
  },
];

const getAll = (req, res) => {
  res.json(users);
};

const getById = (req, res) => {
  const id = parseInt(req.params.idUsuario);
  const user = users.find((user) => user.id === id);
  res.json(user);
};

const create = (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
};

module.exports = {
  getAll,
  getById,
  create,
};
