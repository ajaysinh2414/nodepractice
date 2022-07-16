const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

//const staticPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../src/partials");
app.set("view engine","hbs");
//app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);
const port = 1000;

app.get("/", (req, res) => {
    res.render("index", {
        MyName : "ajayrajsinh",
    });
});

app.get("/",(req, res) => {
    res.send("<h1>welcome to home express</h1>");
});
app.get("/contact",(req, res) => {
    res.send("welcome to contact page ");
    
});

app.get("/about",(req, res) => {
    res.status(200).send("welcome to about page");
});
app.get("/tem",(req, res) => {
    res.send("welcome to tem page");
});
app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
});
