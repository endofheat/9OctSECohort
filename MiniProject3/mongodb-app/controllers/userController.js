"use strict";
const mongoose = require("mongoose");
let Models = require("../models"); 
const { param } = require("../routes/userRoutes");


const getUsers = (/* req, */ res) => {
  //let startLetter = req.query.letter;
  Models.User.find({})
  .then((data) => {
/*     console.log(data)
    let matchingUsers = data.data.filter(char => char.userName.toUpperCase().starsWith(startLetter.toUpperCase())) */

    res.send({ result: 200, data: /* matchingUsers */data })})
  .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createUser = (data, res) => {
  console.log(data);
  new Models.User(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateUser = (req, res) => {
  console.log(req.body);
  Models.User.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};


const deleteUser = (req, res) => {
  Models.User.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};
