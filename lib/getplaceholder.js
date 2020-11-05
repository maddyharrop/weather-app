const fetch = require("node-fetch");
const url = "https://jsonplaceholder.typicode.com/users"

const getPlaceHolder = async() => {
    let data = await fetch(url);
    // console.log(await data.json());
    return await data.json();
}

// getPlaceHolder();

module.exports = getPlaceHolder;