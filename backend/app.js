const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const booksRoutes = require('./routes/books');
const mongoConfig = require('./config/mongodb-config');

// console.log(mongoConfig.URI + mongoConfig.dbName, mongoConfig.options)

// mongoose.connect(mongoConfig.URI + mongoConfig.dbName,
//     mongoConfig.options)
//     .then(() => console.log('Connected'))
//     .catch((err) => console.log(err));

const app = express();

app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/overview', booksRoutes);

module.exports = app;
