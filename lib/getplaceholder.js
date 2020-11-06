const fetch = require("node-fetch");
require("dotenv").config()
// const url = `https://api.openweathermap.org/data/2.5/weather?q=manchester,uk&units=metric&appid=${process.env.APPID}`

const getPlaceHolder = async(city, code) => {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&units=metric&appid=${process.env.APPID}`);
    return await data.json();    
}

// getPlaceHolder();

module.exports = getPlaceHolder;