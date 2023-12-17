"use strict";
let Models = require("../models"); 

const getPosts = (res) => {
    Models.Post.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const getPostById = (req, res) => {
    Models.Post.findById(req.params.id)
    .then((data) => res.send({result: 200, data: data}))
    .catch((err) => {
        console.log(err)
        res.send({result: 500, error: err.message})
    })
}

const createPost = (data, res) => {
    console.log(data);
    new Models.Post(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

const updatePost = (req, res) => {
    console.log(req.body)
    Models.Post.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    })
    };

const deletePost = (req, res) => {
    Models.Post.deleteOne({_id:req.params.id}) 
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
        });
    };

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};
