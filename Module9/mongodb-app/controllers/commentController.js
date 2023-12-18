"use strict";
let Models = require("../models"); 

const getComments = (res) => {
    Models.Comment.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const createComment = (data, res) => {
    console.log(data);
    new Models.Comment(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const updateComment = (req, res) => {
    console.log(req.body)
    Models.Comment.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    })
    };

const deleteComment = (req, res) => {
    Models.Comment.deleteOne({_id:req.params.id}) 
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
        });
    };

module.exports = {
    getComments,
    createComment,
    updateComment,
    deleteComment,
};
