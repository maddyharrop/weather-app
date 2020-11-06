const express = require('express');
const { on } = require('nodemon');
const router = express.Router(); 

const getWeather = require("../lib/getWeather");

router.get("/", (req, res) => {
    res.render("weather");
});

router.post("/", async (req, res) => {
    let city = req.body.city;
    let code = req.body.code;
    let sunriseCheck = req.body.sunriseCheck;
    let sunsetCheck = req.body.sunsetCheck;
    let humidityCheck = req.body.humidityCheck;
    let descriptionCheck = req.body.descriptionCheck
    console.log(sunriseCheck)
    let data = await getWeather(city, code, );
    if (data.cod == "404") {
        res.render("weather", {
            err: "The provided location does not exist"
        });
        return;
    }
    
    let name = data.name;
    let temp = data.main.temp;
    let feels_like = data.main.feels_like;
    let context = {temp, "feels like": feels_like};
    if (sunriseCheck == "on") {
        context.sunrise = data.sys.sunrise
    }
    if (sunsetCheck == "on") {
        context.sunset = data.sys.sunset
    }
    if (humidityCheck == "on"){
        context.humidity = data.main.humidity
    }
    if (descriptionCheck == "on") {
        context.description = data.weather[0].description;
    }
    res.render("weather", {
        name,
        data: context,
        listExists: true,
    });
    
});

module.exports = router; 