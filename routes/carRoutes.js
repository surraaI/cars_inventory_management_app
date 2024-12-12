const express = require('express');
const { showCars, newCarForm, createCarHandler } = require('../controllers/carController');

const router = express.Router();

router.get('/', showCars);
router.get('/new', newCarForm);
router.get('/:categoryId', showCars);
router.post('/new', createCarHandler);

module.exports = router;
