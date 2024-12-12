const express = require('express');
const { showCategories, newCategoryForm, createCategoryHandler } = require('../controllers/categoryController');

const router = express.Router();

router.get('/', showCategories);
router.get('/new', newCategoryForm);
router.post('/new', createCategoryHandler);


module.exports = router;
