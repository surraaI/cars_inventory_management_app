const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const categoryRoutes = require('./routes/categoryRoutes');
const carRoutes = require('./routes/carRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/categories', categoryRoutes);
app.use('/cars', carRoutes);

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
