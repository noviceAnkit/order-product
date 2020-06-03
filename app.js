//This file is used as express manager

const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const morgan = require('morgan');
//const mongoose = require('mongoose');
//const morgan = morgan();

const productroutes = require('./api/routes/products');
const orderroutes = require('./api/routes/orders');

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


app.use(morgan('dev'));
app.use('/products', productroutes);
app.use('/orders', orderroutes);


app.use((req,res,next) => {
    const error = new error('not found');
    error.status = 404;
    next(error);
});


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    });
});

module.exports = app;