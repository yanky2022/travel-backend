'use strict'

const express = require('express');
const ProjectController = require('../controllers/project');
const UserController = require('../controllers/user');
const CarController = require('../controllers/car');
const ClientController = require('../controllers/client');
const TravelController = require('../controllers/travel');
const Auth = require('../auth/auth');
const router = express.Router();

router.post('/create', ProjectController.createProject);

//Usuarios
router.get('/users', UserController.getUsers);
router.post('/user', UserController.createUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);
router.get('/user/:id?', UserController.getUser);
router.get('/user-profile/', UserController.queryUserByProfile);
//Viajes
router.post('/travel', TravelController.createTravel);
router.put('/travel/:id', TravelController.updateTravel);
router.delete('/travel/:id', TravelController.deleteTravel);
router.get('/travel/:id?', TravelController.getTravel);
router.get('/travels', TravelController.getTravels);
router.get('/travelst', TravelController.getTravelst);
router.get('/travelstru', TravelController.getTravelsFlase);
router.post('/travel-client', TravelController.queryTravelByClient);


// Vehiculos
router.post('/car', CarController.createCar);
router.put('/car/:id', CarController.updateCar);
router.delete('/car/:id', CarController.deleteCar);
router.get('/car/:id?', CarController.getCar);
router.get('/cars', CarController.getCars);

// Clientes
router.post('/client', ClientController.createClient);
router.put('/client/:id', ClientController.updateClient);
router.delete('/client/:id', ClientController.deleteClient);
router.get('/client/:id?', ClientController.getClient);
router.post('/client-status', ClientController.queryClientByStatus);
router.get('/clients', ClientController.getClients);
router.post('/client-travel', ClientController.getClientTravel);

//Loguin
router.post('/loguin', Auth.loguin);

module.exports = router;
 