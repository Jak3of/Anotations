'use strict';

var mongoose = require('mongoose');

var app = require('./app');

var port = 3700;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/portafolio').then(() => {
    console.log('Conectado a la base de datos');

    // creacion del servidor

    app.listen(port, () => {
        console.log('Servidor corriendo en http://localhost:3700');

        
    })





}).catch((err) => {
    console.log('Error al conectar a la base de datos');
    console.log(err);
});