const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello world from zala ");
});

app.get("/about" , (req, res) => {
    res.send("hello this about side");

});

app.listen(2300, () => {
    console.log("listening the port at 2300");
});
// this is git demo comment
