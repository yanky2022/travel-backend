'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CarSchema = Schema({
    ability: String,
    cylinder_capacity: String,
    soat_date: String,
    operation_card_date: String,
    license_plate: String,
    owner: String
    
});  
const Car =  mongoose.model('vehiculo', CarSchema); 
module.exports = Car;
// projects ---> guarda los documentos en la coleccion
