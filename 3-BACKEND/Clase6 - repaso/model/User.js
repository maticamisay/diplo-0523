const { readJSONFile, writeJSONFile } = require(".");

const createUser = (userData) => {
  const users = readJSONFile("users.json");
  users.push(userData);
  writeJSONFile("users.json", users);
};

const getUsers = () => readJSONFile("users.json");

const getUserById = (userId) => {
  const users = getUsers();
  const userFinded = users.find((user) => user.id.toString() === userId);
  if (!userFinded) {
    return null;
  }
  return userFinded;
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
