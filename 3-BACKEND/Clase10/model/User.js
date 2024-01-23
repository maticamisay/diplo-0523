const { readFileJSON, writeFileJSON } = require(".");

const dbPath = "users.json";

const findAll = () => {
  const data = readFileJSON(dbPath);
  return data;
};

const findByID = (id) => {
  const data = readFileJSON(dbPath);
  const user = data.find((userDb) => userDb.id === id);
  return user;
};

// añade un usuario a la """base de datos"""
const addUser = (user) => {
  const data = readFileJSON(dbPath);
  data.push(user);
  writeFileJSON(dbPath, data);
};

const update = (id, newUser) => {
  const data = readFileJSON(dbPath);
  const index = data.findIndex((userDb) => userDb.id === id);
  data[index] = {
    ...data[index],
    ...newUser,
  };
  writeFileJSON(dbPath, data);
};

module.exports = { findByID, findAll, addUser, update };
