const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const { writeFileJSON, readFileJSON } = require("./utils");
const validateUser = require("./utils/validateUser");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "string-superSecreto2024",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
  })
);

app.get("/inicio", (req, res) => {
  const { username } = req.session;
  console.log({ username });
  if (!username) {
    return res.status(400).json({ msg: "debe iniciar sesion" });
  }
  return res.json({ msg: "bienvenido", user: username });
});

//username mati
//password 123
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const result = validateUser(username, password);
  if (!result) {
    return res.status(400).json({ msg: "usuario o contraseña incorrecta" });
  }
  req.session.username = result.username; //se agrega a la sesión, el nombre del usuario
  return res.json({ msg: "inicio de sesion exitoso" }); //aquí se manda al frontend en una cookie
});

app.post("/registro", (req, res) => {
  const { username, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const users = readFileJSON("./users.json");
  users.push({ username: username.trim(), password: hashPassword });
  writeFileJSON("./users.json", users);
  return res.status(201).json({ msg: "registro exitoso" });
});

app.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT}`);
});
