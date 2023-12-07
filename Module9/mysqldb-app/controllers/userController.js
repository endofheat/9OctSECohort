"use strict";
const Models = require("../models");
const getUsers = (res) => {
  Models.User.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({result:500, error: err.message});
    });
};
const createUsers = (data, res) => {
  Models.User.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const updateUsers = (data, res) => {
    Models.User.update(req.body, {where: {id:req.params.id}})
      .then(function (data) {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        console.log(err);
      res.send({result:500, error: err.message});
      });
  };

  const deleteUsers = (data, res) => {
    Models.User.destroy({where: {id:req.params.id}})
      .then(function (data) {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        console.log(err);
      res.send({result:500, error: err.message});
      });
  };

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
