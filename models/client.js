'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClientSchema = Schema({
    name: String,
    surname: String,
    starting_point: String,
    final_point: String,
    assigned: Boolean,
    idUser: String
    
});  
const Client =  mongoose.model('cliente', ClientSchema); 
module.exports = Client;
// projects ---> guarda los documentos en la coleccion
