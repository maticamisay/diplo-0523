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

const getCategoryById = async (req, res) => {
  try {
    const { idCategoria } = req.params;
    const category = await Category.findByPk(idCategoria);
    return res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

const createCategory = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newCategory = await Category.create({ category_name: nombre });
    return res
      .status(201)
      .json({ message: "Categoria creada correctamente", data: newCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

const updateCategory = async (req, res) => {
  const oldCategory = req.body;
  const { idCategoria } = req.params;

  try {
    await Category.update(
      {
        category_name: oldCategory.nombre,
      },
      {
        where: {
          id: idCategoria,
        },
      }
    );
    return res.json({
      message: "Categoria actualizada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

const deleteCategory = async (req, res) => {
  const { idCategoria } = req.params;
  try {
    await Category.destroy({
      where: {
        id: idCategoria,
      },
    });
    return res.json({
      message: "Categoria eliminada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
