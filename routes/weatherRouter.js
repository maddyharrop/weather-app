const express = require('express');
const router = express.Router(); 

const getWeather = require("../lib/getWeather");

router.get("/", (req, res) => {
    res.render("weather");
});

router.post("/", async (req, res) => {
    let city = req.body.city;
    let code = req.body.code;
    let data = await getWeather(city, code);
    if (data.cod == "404") {
        res.render("weather", {
            err: "The provided location does not exist"
        });
        return;
    }
    let name = data.name;
    let description = data.weather[0].description;
    let temp = data.main.temp;
    let feels_like = data.main.feels_like;
    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;
    res.render("weather", {
        name,
        data: { description, temp, feels_like, sunrise, sunset },
        listExists: true
    });
});

module.exports = router; 