"use strict";
const Models = require("../models");

const getComments = (res) => {
  Models.Comment.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({result:500, error: err.message});
    });
};
const createComment = (data, res) => {
  Models.Comment.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({result:500, error: err.message});
    });
};
const updateComment = (data, res) => {
    Models.Comment.update(req.body, {where: {id:req.params.id}})
      .then(function (data) {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        console.log(err);
        res.send({result:500, error: err.message});
      });
  };

  const deleteComment = (data, res) => {
    Models.Comment.destroy({where: {id:req.params.id}})
      .then(function (data) {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        console.log(err);
        res.send({result:500, error: err.message});
      });
  };

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
};
