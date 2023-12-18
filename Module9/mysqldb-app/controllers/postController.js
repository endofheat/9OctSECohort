"use strict";
const Models = require("../models");

const getPosts = (res) => {
  Models.Post.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({result:500, error: err.message});
    });
};
const createPost = (data, res) => {
  Models.Post.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({result:500, error: err.message});
    });
};
const updatePost = (data, res) => {
    Models.Post.update(req.body, {where: {id:req.params.id}})
      .then(function (data) {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        console.log(err);
        res.send({result:500, error: err.message});
      });
  };

  const deletePost = (data, res) => {
    Models.Post.destroy({where: {id:req.params.id}})
      .then(function (data) {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        console.log(err);
        res.send({result:500, error: err.message});
      });
  };

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
