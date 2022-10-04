'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TravelSchema = Schema({
    starting_point: String,
    final_point: String,
    race_price: Number,
    id_client: String,
    id_user: String
});  
const Travel =  mongoose.model('viaje', TravelSchema); 
module.exports = Travel;
// projects ---> guarda los documentos en la coleccion
