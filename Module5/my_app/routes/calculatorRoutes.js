const express = require("express");
const calculatorController = require ('../controllers/calculatorController')
const router = express.Router();

// new route for adding two numbers
router.get('/add', (req, res) => {
    calculatorController.add(req, res)

});

router.get('/subtract', (req, res) => {
    calculatorController.subtract(req, res)
});

router.get('/divide', (req, res) => {
    calculatorController.multiply(req, res)
});

router.get('/multiply', (req, res) => {
    calculatorController.divide(req, res)
});

module.exports = router;