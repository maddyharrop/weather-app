const express = require('express');
const router = express.Router(); 

const getWeather = require('../lib/getWeather'); 

app.get("/", async (req, res) => {
    let data = await getWeather("Manchester", "gb");
    console.log(data);
    let name = data.name;
    let description = data.weather[0].description;
    let temp = data.main.temp;
    let feels_like = data.main.feels_like;
    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;
    res.render("index", {
        name,
        data: {
            description, temp, feels_like, sunrise, sunset
        }
    });
});

module.exports = router;