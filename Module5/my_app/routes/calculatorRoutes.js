const express = require("express");
const router = express.Router();

// new route for adding two numbers
router.get('/add', (req, res) => {
    let num1;
    console.log(req.query);
    res.send(req.query);

});

module.exports = router;