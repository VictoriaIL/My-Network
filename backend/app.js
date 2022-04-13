const express = require('express');
const bodyParser = require('body-parser');
const authRoutes  = require('./routes/auth');
const usersRoutes  = require('./routes/users');
const app = express();


app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

module.exports = app;
