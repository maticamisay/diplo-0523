const express = require("express");
const middlewareFunction = require("./middleware/middlewareFunction");
const authMiddleware = require("./middleware/authMiddleware");
const session = require("express-session");
const validateUsername = require("./middleware/validateUsername");
const bcrypt = require("bcrypt");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(
  session({
    secret: "string-superSecreto2024",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
  })
);

const users = [
  {
    username: "matias",
    password: "$2b$10$hzB84eYHpZRC/2r/r9Y99.YoXWRixDEhoOCWzhijuZesU1kt.BCCO", //mati1 hasheado
  },
  {
    username: "julian2",
    password: "$2b$10$wF/nK.wqGRb57FVjw2DsbOc9bVde9euhBELW9mQWk9QfS1rXal9vy", //jualin22 hasheado
  },
];

app.use((request, response, next) => {
  console.log("Middleware 1");
  next();
});

app.get("/", authMiddleware, (req, res) => {
  return res.send(`Hello World! Usuario: ${req.session.username}`);
});

app.post("/register", validateUsername, (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log({
    passOriginal: password,
    passHashed: hashedPassword,
  });
  return res.status(201).json({ msg: "Registro exitoso..." });
});

app.post("/login", validateUsername, (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(404).json({ msg: "usuario no encontrado" });
  }
  const isValidPassword = bcrypt.compareSync(password, user.password);
  if (!isValidPassword) {
    return res.status(404).json({ msg: "contraseña invalida" });
  }
  req.session.username = user.username;
  return res.json({ msg: "logeo exitoso" });
});

app.post("/logout", (req, res) => {
  req.session.destroy();
  return res.json({ msg: "cierre de sesión exitoso" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
