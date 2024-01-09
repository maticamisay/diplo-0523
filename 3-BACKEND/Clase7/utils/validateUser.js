const { readFileJSON } = require(".");
const bcrypt = require("bcrypt");

const validateUser = (username, password) => {
  const users = readFileJSON("./users.json");
  const user = users.find((user) => user.username === username.trim());
  if (!user) {
    return false;
  }
  const isValidPassword = bcrypt.compareSync(password, user.password);
  if (!isValidPassword) {
    return false;
  }
  return user;
};

module.exports = validateUser;
