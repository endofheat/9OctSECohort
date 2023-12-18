"use strick";

var axios = require('axios');
const { response } = require('express');

const getHoliday = (data, res) => {
    const countryCode = data;
    axios.get("https://date.nager.at/api/v3/NextPublicHolidays/", countryCode)
    .then ((response) => {
        if (response) {
            res.send({result:200, data: response.data})
        }
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
        });
}

module.exports = {
    getHoliday
}