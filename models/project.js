'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: [String]
});  
const Project =  mongoose.model('project', ProjectSchema); 
module.exports = Project;
// projects ---> guarda los documentos en la coleccion
