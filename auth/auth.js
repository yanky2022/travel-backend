"use strict";
const jwt = require('jsonwebtoken');
const User = require("../models/user");

const loguin = async(req, res) => {
    try {
        const dat = req.body;
        console.log(dat);
        const secret_key = "d0roWSf8eYn6OqqcdIBqNVOV1Z6QC2W1GLMu8KsfQcyHpoa5VyFZX6hovXPVRlwU";
        const user = await User.findOne({user: dat.user, passport:dat.pass})
        if(user){
            const token = jwt.sign({id:user.id},secret_key);
            const response = {
                token: token,
                user:user
            }
            return res.status(200).json({status:true, message: "usuario autenticado",response})
        } else{
            return res.status(200).json({status:false, message: "credenciales no correctas"})
        }
    } catch{
        
    }
};

module.exports.loguin = loguin;