'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = Schema({
    name: String,
    surname: String,
    document_type: String,
    number: String,
    user: String,
    passport: String,
    email: String,
    profile: String
    
});  
const User =  mongoose.model('usuario', UserSchema); 
module.exports = User;
// projects ---> guarda los documentos en la coleccion
