const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const mongoConfig = require('./config/mongodb-config');

mongoose
  .connect(mongoConfig.URI + mongoConfig.dbName, mongoConfig.options)
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err));

const app = express();

app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

module.exports = app;
