const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is a test that I have changed");
});

router.get("/hello", (req, res) => {
    console.log(req.query);
    res.send("Hello World, welcome to my Express App!"+req.query.second);
  });
  
router.get("/meow", (req, res) => {
    console.log(req.query);
    res.send("Meow, =^w^=");
  });

module.exports = router;
