'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//cargar archivos de rutas
const project_routes = require('./routes/project');

//middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());
//cors
app.use(cors());
//tutas
app.use('/api', project_routes);


//exportar
module.exports = app;
