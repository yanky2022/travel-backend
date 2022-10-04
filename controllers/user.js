"use strict";
const User = require("../models/user");
const controller = {
  createUser: function (req, res) {
    const user = new User();
    const data = req.body;
    user.name = data.name;
    user.surname = data.surname;
    user.document_type = data.document_type;
    user.number = data.number;
    user.user = data.user;
    user.passport = data.passport;
    user.email = data.email;
    user.profile = data.profile;
    user.save().then((data) => {
      return res.status(200).json({ message: "Guardado correctamente", data });
    });
  },
  getUser: function (req, res) {
    const userId = req.params.id;

    if (userId == null)
      return res.status(404).json({
        message: "El dato no existe",
        error,
      });
      

    User.findById(userId, (err, car) => {
      return res.status(200).json({
        user,
      });
    });
  },
  getUsers: function (req, res) {
    User.find({}).exec((err, users) => {
      
      if(err) return res.status(500).json({
        message: "Error al Cargar los datos",
        error,
      });
      if(err) return res.status(400).json({
        message: "El dato no existe",
        error,
      });
      return res.status(200).json({users});
    });
  },
  deleteUser: function (req, res) {
    const userId = req.params.id;

    User.findByIdAndDelete(userId, (err, userRemoved) => {
      return res.status(200).json({
        message: "Eliminado correctamente",
      });
    });
  },
  updateUser: function (req, res) {
    const userId = req.params.id;
    const update = req.body;

    User.findByIdAndUpdate(userId, update, { new: true }, (err, userUpdated) => {
      return res.status(200).json({
        message: "Actualizado correctamente",
        update,
      });
    });
  },
  queryUserByProfile: function (req, res) {
    const user = User.find({ profile: 'Propietario' }).exec(
      (err, users) => {
        if (err)
          return res
            .status(500)
            .json({ message: "error al devolver data:", err });

        if (!users)
          return res.status(400).json({ message: "no se encontraron datos" });
        return res.status(200).json({ message: " datos obtenidos:", users });
      }
    );
  },
};

module.exports = controller;
