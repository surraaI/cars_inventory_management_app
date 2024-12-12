const pool = require('../utils/db');

const getAllCategories = async () => {
  const { rows } = await pool.query('SELECT * FROM categories');
  return rows;
};

const createCategory = async (name, description) => {
  const { rows } = await pool.query(
    'INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *',
    [name, description]
  );
  return rows[0];
};

module.exports = { getAllCategories, createCategory };
