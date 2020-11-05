const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const getPlaceHolder = require("./lib/getplaceholder");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, 'views')); 
app.set("view engine", ".hbs");

app.engine("hbs", hbs({
    defaultLayout:"main",
    extname: ".hbs",
    layoutDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials")
}));

app.get("/", async (req, res) => {
    let data = await getPlaceHolder();
    res.render("index", {data, listExists: true});
});
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("*", (req, res) => {
    res.status(404);
    res.render("404")
})
app.listen(3000, () => {
    console.log("Listening to port 3000");
});