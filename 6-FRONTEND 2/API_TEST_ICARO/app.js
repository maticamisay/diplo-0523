const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const getProducts = () => {
  const products = fs.readFileSync("./products.json", "utf8");
  return JSON.parse(products);
};

const saveProducts = (products) => {
  fs.writeFileSync(
    "./products.json",
    JSON.stringify(products, null, 2),
    "utf8"
  );
};

app.get("/api/v1/products", async (req, res) => {
  const products = getProducts();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  res.status(200).json({
    data: products,
  });
});

app.post("/api/v1/products", (req, res) => {
  const { title, price } = req.body;
  if (!title || !price) {
    return res.status(400).json({
      error: "title and price are required",
    });
  }
  const products = getProducts();
  const newProduct = {
    id: new Date().getTime(),
    title,
    price,
  };
  products.push(newProduct);
  saveProducts(products);
  res.status(201).json({
    message: "Product created",
    data: newProduct,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
