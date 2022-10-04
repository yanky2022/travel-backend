"use strict";

const Travel = require("../models/travel");
const User = require("../controllers/user");
const Client = require("../controllers/client");

const controller = {
  createTravel: function (req, res) {
    const travel = new Travel();
    const data = req.body;
    travel.starting_point = data.starting_point;
    travel.final_point = data.final_point;
    travel.race_price = data.race_price;
    travel.id_client = data.id_client;
    travel.id_user = data.id_user;
    travel.save().then(async (data) => {
      const updateClient = await Client.updateClientStatus(data.id_client);
      return res.status(200).json({
        message: "Guardado correctamente",
        data,
        updateClient,
      });
    });
  },
  getTravels: function (req, res) {
    Travel.find({ id_client: "true" }).exec((err, travels) => {
      if (err)
        return res.status(500).json({
          message: "Error al Cargar los datos",
          error,
        });
      if (err)
        return res.status(400).json({
          message: "El dato no existe",
          error,
        });
      return res.status(200).json({ travels });
    });
  },
  getTravelsFlase: function (req, res) {
    Travel.find({ id_client: "false" }).exec((err, travelsfalse) => {
      if (err)
        return res.status(500).json({
          message: "Error al Cargar los datos",
          error,
        });
      if (err)
        return res.status(400).json({
          message: "El dato no existe",
          error,
        });
      return res.status(200).json({ travelsfalse });
    });
  },
  getTravelst: function (req, res) {
    const id = req.body.idUser;
    Client.find({ idUser: id }).exec((err, clienttravel) => {
      if (err)
        return res.status(500).json({
          message: "Error al Cargar los datos",
          error,
        });
      if (err)
        return res.status(400).json({
          message: "El dato no existe",
          error,
        });
      return res.status(200).json({ clienttravel });
    });
  },
  getTravelsTrue: function (req, res) {
    Travel.find({ id_client: "true" }).exec((err, travelstrue) => {
      if (err)
        return res.status(500).json({
          message: "Error al Cargar los datos",
          error,
        });
      if (err)
        return res.status(400).json({
          message: "El dato no existe",
          error,
        });
      return res.status(200).json({ travelstrue });
    });
  },
  getTravel: function (req, res) {
    const travelId = req.params.id;
    if (travelId == null)
      return res.status(404).json({
        message: "El dato no existe",
        error,
      });

    Travel.findById(travelId, (err, travel) => {
      return res.status(200).json({
        travel,
      });
    });
  },
  deleteTravel: function (req, res) {
    const travelId = req.params.id;

    Travel.findByIdAndDelete(travelId, (err, travelRemoved) => {
      return res.status(200).json({
        message: "Eliminado correctamente",
      });
    });
  },
  updateTravel: function (req, res) {
    const travelId = req.params.id;
    const update = req.body;

    Travel.findByIdAndUpdate(
      travelId,
      update,
      { new: true },
      (err, travelUpdated) => {
        return res.status(200).json({
          message: "Actualizado correctamente",
          update,
        });
      }
    );
  },
  queryTravelByClient: function (req, res) {
    const id = req.body.idUser;
    Travel.find({ id_user: id }).exec((err, travelclient) => {
      if (err)
        return res
          .status(500)
          .json({ message: "error al devolver data:", err });

      if (!travelclient)
        return res.status(400).json({ message: "no se encontraron datos" });
      return res
        .status(200)
        .json({ message: " datos obtenidos:", travelclient });
    });
  },
};

module.exports = controller;
