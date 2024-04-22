const Category = require("../models").Category;

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ["id", "category_name"],
    });
    res.json({ data: categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

const getCategoryById = async (req, res) => {};

const createCategory = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newCategory = await Category.create({ category_name: nombre });
    return res.status(201).json({ data: newCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

const updateCategory = async (req, res) => {};

const deleteCategory = async (req, res) => {};

module.exports = {
  getAllCategories,
  createCategory,
};
