"use strict";
const Project = require("../models/project");
const controller = {
 
  createProject: function (req, res) {
    const project = new Project();
    const data = req.body;
    project.name = data.name;
    project.description = data.description;
    project.category = data.category;
    project.year = data.year;
    project.langs = data.langs;
    project.save().then((data) => {
      return res
        .status(200)
        .json({
          message: "Guardado correctamente",
          data
        })
        .catch((error) => {
          return res.status(400).json({
            message: "Error al Guardar",
            error
          });
        });
    });
  },
};

module.exports = controller;
