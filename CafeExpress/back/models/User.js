const { readFileJSON, writeFileJSON } = require(".");
const { v4: uuidv4 } = require("uuid");

const dbPath = "users.json";

const User = {
  findAll: function () {
    const data = readFileJSON(dbPath);
    return data;
  },

  findByID: function (id) {
    const data = readFileJSON(dbPath);
    const user = data.find((userDb) => userDb.id === id);
    return user;
  },

  addUser: function (user) {
    const data = readFileJSON(dbPath);
    const newUser = { ...user, id: uuidv4() };
    data.push(newUser);
    writeFileJSON(dbPath, data);
  },

  update: function (id, newUser) {
    const data = readFileJSON(dbPath);
    const index = data.findIndex((userDb) => userDb.id === id);
    data[index] = {
      ...data[index],
      ...newUser,
    };
    writeFileJSON(dbPath, data);
  },

  delete: function (id) {
    const data = readFileJSON(dbPath);
    const filteredData = data.filter((userDb) => userDb.id !== id);
    writeFileJSON(dbPath, filteredData);
  },
};

module.exports = User;
