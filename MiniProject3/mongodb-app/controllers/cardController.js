"use strict";
let Models = require("../models");
const axios = require("axios");
/* const { param } = require("../routes/cardRoutes"); */

const getCards = (res) => {
  axios
    .get("https://sakura-api.onrender.com/cards")
    .then((data) => {
      console.log(data.data);
      data.data.forEach(async (card) => {
        let foundCard = await Models.Card.findOne({ cardName: card.name });
        let dataCard = {
          cardName: card.name,
          imgURL: card.urlImage,
          user: "",
          notes: "This is "+card.name+" card",
        };
        if (!foundCard) {
          new Models.Card(dataCard).save();
        }
      });
      res.status(200).json({ data: data. data});
    })
    .catch((err) => {
      res.status(500).json({ data: err.message });
    });
};

const createCard = (data, res) => {
  console.log(data);
  new Models.Card(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

/* const getUserCards = (req, res) => {
  Models.Card.find({ user: req.params.uid })
    .populate({ path: "user" })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
}; */

const updateCard = (req, res) => {
  console.log(req.body);
  Models.Card.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getCardById = (req, res) => {
  Models.Card.findById(req.params.id)
    .then((data) => res.send({result: 200, data: data}))
    .catch((err) => {
      console.log(err)
      res.send({result: 500, error: err.message})
    })
};

const deleteCard = (req, res) => {
  Models.Card.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getCards,
  createCard,
  //getUserCards,
  updateCard,
  getCardById,
  deleteCard
};
