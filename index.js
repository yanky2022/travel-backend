'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise =global.Promise;
mongoose.connect('mongodb://localhost:27017/transporte')
.then(() =>{
    console.log("conexion a la base de datos establecida con exito...");
    //creacion de servidor 
    app.listen(port, () =>{
        console.log("Servidor corriendo correectamente en la url: localhost:3800");

    });

})
.catch(err => console.log(err));