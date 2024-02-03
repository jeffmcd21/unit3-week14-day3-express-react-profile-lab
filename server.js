
// ~ // --------------- DEPENDENCIES --------------- // ~ //
const express = require("express");
const cors = require("cors");


// ~ // --------------- JSON FILES --------------- // ~ //
const projects = require("./projects.json");
const about = require("./about.json");


// ~ // --------------- APP OBJECT --------------- // ~ //
const app = express();


// ~ // --------------- MIDDLEWARE --------------- // ~ //
app.use(cors());


// ~ // --------------- ROUTE - HOME  --------------- // ~ //
app.get("/", (req, res) => {
    res.send("Hello Express & React")
});


// ~ // --------------- ROUTE - PROJECTS --------------- // ~ //
app.get("/projects", (req, res) => {
    res.json(projects)
});


// ~ // --------------- ROUTE - ABOUT --------------- // ~ //
app.get("/about", (req,res) => {
    res.json(about)
});


// ~ // --------------- PORT VARIABLE --------------- // ~ //
const PORT = process.env.PORT || 7777;


// ~ // --------------- SERVER LISTENER --------------- // ~ //
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));