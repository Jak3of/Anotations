'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos de rutas 

var user_routes = require('./routes/projects');

// middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
    // * -> es la propia url
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

// rutas

app.use('/api', user_routes);


// exportar

module.exports = app