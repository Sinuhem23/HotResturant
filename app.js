// Dependencies 
var express = require("express");
var path = require("path");

// Set up express
var app = express();
var PORT = 8080;

// Routes 
// ====================================
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});