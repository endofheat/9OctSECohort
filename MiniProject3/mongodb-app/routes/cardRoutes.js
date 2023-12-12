const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) =>{
    Controllers.cardController.getCards(res);
})

router.post("/create", (req, res) =>{
    Controllers.cardController.createCard(req.body, res);
})

router.get("/user/:uid", (req, res) => {
    Controllers.cardController.getUserCards(req, res)
})

module.exports = router;