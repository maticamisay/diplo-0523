const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  res.render("inicio");
});

app.get("/hola", (req, res) => {
  res.render("subcarpeta/test", { nombreVariable: "matiii" });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
