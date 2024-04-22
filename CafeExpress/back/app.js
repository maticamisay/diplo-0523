const express = require("express");
const app = express();
const port = 3000;
const Category = require("./models").Category;

app.use(express.static("public"));
app.use(express.json());

app.get("/categorias", async (req, res) => {
  const categories = await Category.findAll({
    attributes: ["category_id", "category_name", "createdAt", "updatedAt"],
  });
  console.log(categories);
  res.send("Hola usuarios");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
