const express = require('express');
const bodyParser = require('body-parser');
const authRoutes  = require('./routes/auth');
const usersRoutes  = require('./routes/users');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();


mongoose.connect(keys.mongoURI)
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err));


app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

module.exports = app;
