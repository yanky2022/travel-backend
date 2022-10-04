"use strict";
const Client = require("../models/client");
const User = require("../controllers/user");

const controller = {
  createClient: function (req, res) {
    const client = new Client();
    const data = req.body;
    client.name = data.name;
    client.surname = data.surname;
    client.starting_point = data.starting_point;
    client.final_point = data.final_point;
    client.assigned = data.assigned;
    client.idUser = data.idUser;
    client.save().then((data) => {
      return res.status(200).json({ message: "Guardado correctamente", data });
    });
  },
 
  getClient: function (req, res) {
    const clientId = req.params.id;

    if (clientId == null)
      return res.status(404).json({
        message: "El dato no existe",
        error,
      });

    Client.findById(clientId, (err, client) => {
      return res.status(200).json({
        client,
      });
    });
  },
  getClients: function (req, res) {
    Client.find({}).exec((err, clients) => {
      
      if(err) return res.status(500).json({
        message: "Error al Cargar los datos",
        error,
      });
      if(err) return res.status(400).json({
        message: "El dato no existe",
        error,
      });
      return res.status(200).json({clients});
    });
  },
  deleteClient: function (req, res) {
    const clientId = req.params.id;
    Client.findByIdAndDelete(clientId, (err, clientRemoved) => {
      return res.status(200).json({
        message: "Eliminado correctamente",
      });
    });
  },
  updateClient: function (req, res) {
    const clientId = req.params.id;
    const update = req.body;

    Client.findByIdAndUpdate(
      clientId,
      update,
      { new: true },
      (err, clientUpdated) => {
        return res.status(200).json({
          message: "Actualizado correctamente",
          update,
        });
      }
    );
  },
  updateClientStatus: function (id, res) {
    const data = { assigned: true };
    Client.findByIdAndUpdate(id, data).then((cliente) => {
            if(cliente){
        return ({ message: "estado cambiado correctamente", data });
      }
    });
  },
  getClientTravel: function (req, res) {
    const id = req.body.idUser
    Client.find({idUser: id}).exec((err, clienttravel) => {
      if(err) return res.status(500).json({
        message: "Error al Cargar los datos",
        error,
      });
      if(err) return res.status(400).json({
        message: "El dato no existe",
        error,
      });
      return res.status(200).json({clienttravel});
    });
  },
   queryClientByStatus: function (req, res) {
    const status = req.body;
    const clients = Client.find({ assigned: status.status }).exec(
      (err, clients) => {
        if (err)
          return res
            .status(500)
            .json({ message: "error al devolver data:", err });

        if (!clients)
          return res.status(400).json({ message: "no se encontraron datos" });
        return res.status(200).json({ message: " datos obtenidos:", clients });
      }
    );
  },
  
};

module.exports = controller;
