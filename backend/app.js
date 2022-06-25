const express = require('express');
const bodyParser = require('body-parser');
const booksRoutes = require('./routes/books');

const app = express();

app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/overview', booksRoutes);

module.exports = app;
