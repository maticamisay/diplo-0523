const { readFileJSON, writeFileJSON } = require(".");
const { v4: uuidv4 } = require("uuid");

const dbPath = "products.json";

const Product = {
  findAll: function () {
    const data = readFileJSON(dbPath);
    return data;
  },

  findByID: function (id) {
    const data = readFileJSON(dbPath);
    const product = data.find((productDb) => productDb.id === id);
    return product;
  },

  addProduct: function (product) {
    const data = readFileJSON(dbPath);
    const newProduct = { ...product, id: uuidv4() };
    data.push(newProduct);
    writeFileJSON(dbPath, data);
  },

  update: function (id, newProduct) {
    const data = readFileJSON(dbPath);
    const index = data.findIndex((productDb) => productDb.id === id);
    data[index] = {
      ...data[index],
      ...newProduct,
    };
    writeFileJSON(dbPath, data);
  },

  delete: function (id) {
    const data = readFileJSON(dbPath);
    const filteredData = data.filter((productDb) => productDb.id !== id);
    writeFileJSON(dbPath, filteredData);
  },
};

module.exports = Product;
