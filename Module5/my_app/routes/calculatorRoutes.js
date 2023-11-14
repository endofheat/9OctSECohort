const express = require("express");
const router = express.Router();

// new route for adding two numbers
router.get('/add', (req, res) => {
    let firstNum = parseInt(req.query.num1);
    let secondNum = parseInt(req.query.num2);
    let addResult = firstNum + secondNum;
    console.log(addResult);
    res.status(200);
    res.json({result: addResult});

});

router.get('/subtract', (req, res) => {
    let firstNum = parseInt(req.query.num1);
    let secondNum = parseInt(req.query.num2);
    let addResult = firstNum - secondNum;
    console.log(addResult);
    res.status(200);
    res.json({result: addResult});
});

router.get('/divide', (req, res) => {
    let firstNum = parseInt(req.query.num1);
    let secondNum = parseInt(req.query.num2);
    let addResult = firstNum / secondNum;
    console.log(addResult);
    res.status(200);
    res.json({result: addResult});
});

router.get('/multiply', (req, res) => {
    let firstNum = parseInt(req.query.num1);
    let secondNum = parseInt(req.query.num2);
    let addResult = firstNum * secondNum;
    console.log(addResult);
    res.status(200);
    res.json({result: addResult});
});

module.exports = router;