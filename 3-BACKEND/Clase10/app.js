const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/userRoutes");

app.use(express.json());

// app.use("/usuarios", require("./routes/userRoutes"));
app.use("/usuarios", userRouter);

app.post("/productos", (req, res) => {
  const { nombre, precio } = req.body;
  console.log({ nombre, precio });
  res.send("producto creado");
});

app.get("/productos", (req, res) => {
  res.send("productos desde db");
});

app.listen(PORT, () => {
  console.log("server running");
});
