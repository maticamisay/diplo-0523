const express = require("express");
const { getUsers, createUser, getUserById } = require("./model/User");
const { validateCreateUser } = require("./middlewares/userValidation");
const validationRules = require("./middlewares");
const app = express();
const port = 3000;

app.use(express.json());

/**
 * Gets the users from the database.
 * @returns {Array} An array of user objects.
 */
app.get("/users", (req, res) => {
  const users = getUsers();
  res.json({ data: users });
});

// Get one user by id
app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const userId = req.params.id;
  const user = getUserById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ data: user });
});

app.post("/users", validateCreateUser, validationRules, (req, res) => {
  const newUser = req.body;
  createUser(newUser);
  res.json({ message: "User created" });
});

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
