'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var projectSchema = new Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

module.exports = mongoose.model('Project', projectSchema)
// projets --> guarda los documentos en la colección projects desde Project
// cambia a minusculas y pluraliza el nombre de la colección

