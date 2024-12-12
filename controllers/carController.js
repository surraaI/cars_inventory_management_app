const { getCarsByCategory, createCar } = require('../models/car');
const { getAllCategories } = require('../models/category');

const showCars = async (req, res) => {
  const { categoryId } = req.params;
  const cars = await getCarsByCategory(categoryId);
  res.render('cars/index', { cars, categoryId });
};

const newCarForm = async (req, res) => {
  const categories = await getAllCategories();
  res.render('cars/create', { categories , body: null });
};

const createCarHandler = async (req, res) => {
  const { make, model, year, price, stock, category_id } = req.body;
  await createCar(make, model, year, price, stock, category_id);
  res.redirect(`/cars/${category_id}`);
};

module.exports = { showCars, newCarForm, createCarHandler };
