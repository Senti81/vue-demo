var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { notFound, errorHandler } = require('./middelware');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome. Have a 🍻. Take off your 👖'
    })
})

app.use(notFound);
app.use(errorHandler);

module.exports = app;
