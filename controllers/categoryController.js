const { getAllCategories, createCategory } = require('../models/category');

const showCategories = async (req, res) => {
  const categories = await getAllCategories();
  res.render('categories/index', { categories });
};

const newCategoryForm = (req, res) => {
  res.render('categories/create',{ body: null });
};

const createCategoryHandler = async (req, res) => {
  const { name, description } = req.body;
  await createCategory(name, description);
  res.redirect('/categories');
};

module.exports = { showCategories, newCategoryForm, createCategoryHandler };
