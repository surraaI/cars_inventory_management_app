const pool = require('../utils/db');

const getCarsByCategory = async (categoryId) => {
  const { rows } = await pool.query(
    'SELECT * FROM cars WHERE category_id = $1',
    [categoryId]
  );
  return rows;
};

const createCar = async (make, model, year, price, stock, categoryId) => {
  const { rows } = await pool.query(
    'INSERT INTO cars (make, model, year, price, stock, category_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [make, model, year, price, stock, categoryId]
  );
  return rows[0];
};

module.exports = { getCarsByCategory, createCar };
