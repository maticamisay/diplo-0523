const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

app.use("/categorias", require("./routes/categories.routes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
