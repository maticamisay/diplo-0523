const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.post("/endpoint-formulario", (req, res) => {
  console.log(req.body);
  res.send("Datos recibidos!!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
