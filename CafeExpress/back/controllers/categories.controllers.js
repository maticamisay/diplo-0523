const Category = require("../models").Category;

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ["category_id", "category_name", "createdAt", "updatedAt"],
    });
    res.json({ data: categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

module.exports = {
  getAllCategories,
};
