"use strict";
const Car = require("../models/car");
const controller = {
  createCar: function (req, res) {
    const car = new Car();
    const data = req.body;
    car.ability = data.ability;
    car.cylinder_capacity = data.cylinder_capacity;
    car.soat_date = data.soat_date;
    car.operation_card_date = data.operation_card_date;
    car.license_plate = data.license_plate;
    car.owner = data.owner;
    car.save().then((data) => {
      return res.status(200).json({
        message: "Guardado correctamente",
        data,
      });
    });
  },
  getCars: function (req, res) {
    Car.find({}).exec((err, cars) => {
      
      if(err) return res.status(500).json({
        message: "Error al Cargar los datos",
        error,
      });
      if(err) return res.status(400).json({
        message: "El dato no existe",
        error,
      });
      return res.status(200).json({cars});
    });
  },
  getCar: function (req, res) {
    const carId = req.params.id;

    if (carId == null)
      return res.status(404).json({
        message: "El dato no existe",
        error,
      });

    Car.findById(carId, (err, car) => {
      return res.status(200).json({
        car,
      });
    });
  },
  deleteCar: function (req, res) {
    const carId = req.params.id;

    Car.findByIdAndRemove(carId, (err, carRemoved) => {
      return res.status(200).json({
        message: "Eliminado correctamente",
      });
    });
  },
  updateCar: function (req, res) {
    const carId = req.params.id;
    const update = req.body;
    delete update._id;
console.log('ID', req.body)
    Car.findByIdAndUpdate(carId, update, { new: true }, (err, carUpdated) => {
      console.log('DATO ACTUALIZADO',carUpdated)
      return res.status(200).json({
        message: "Actualizado correctamente",
        update,
      });

    });
  },
};

module.exports = controller;
