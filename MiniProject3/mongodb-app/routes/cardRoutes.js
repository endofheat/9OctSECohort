const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) =>{
    Controllers.cardController.getCards(res);
})

router.post("/create", (req, res) =>{
    Controllers.cardController.createCard(req.body, res);
})

router.get("/:id", (req, res) => {
    Controllers.cardController.getCardById(req, res);
})

router.put("/:id", (req, res) => {
    Controllers.cardController.updateCard(req, res);
});

router.get("/:id", (req, res) => {
    Controllers.cardController.getCardById(req, res);
});

router.delete("/:id", (req, res) => {
    Controllers.cardController.deleteCard(req, res);
});

module.exports = router;