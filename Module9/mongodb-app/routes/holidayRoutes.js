let express = require("express");
let router = express.Router();

let Controllers = require("../controllers"); //index.js
const { resolve } = require("path");

router.get("/", (req, res) => {
  Controllers.holidayController.getHoliday(res.query, res);
});

module.exports = router;
