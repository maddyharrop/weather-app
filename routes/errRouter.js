const express = require('express');
const router = express.Router();

app.get("*", (req, res) => {
    res.status(404);
    res.render("404");
});

module.exports = router; 
