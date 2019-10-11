// Dependencies 
var express = require("express");
var path = require("path");

// Set up express
var app = express();
var PORT = 8080;

var tables =[{
        "customerName": "ddddd",
        "phoneNumber": "dddd",
        "customerEmail": "dddd",
        "customerID": "dddd"
    },
    {
        "customerName": "ddddd",
        "phoneNumber": "dddd",
        "customerEmail": "dddd",
        "customerID": "dddd"
    },
    {
        "customerName": "ddddd",
        "phoneNumber": "dddd",
        "customerEmail": "dddd",
        "customerID": "dddd"
    },
    {
        "customerName": "ddddd",
        "phoneNumber": "dddd",
        "customerEmail": "dddd",
        "customerID": "dddd"
    },
    {
        "customerName": "ddddd",
        "phoneNumber": "dddd",
        "customerEmail": "dddd",
        "customerID": "dddd"
    }
];
var waitingList = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
    
    if (tables.length < 5){
        tables.push(newReservation);
        res.json(true);
    }else{
        waitingList.push(newReservation);
        res.json(false);
    }
    
});

// app.post("/api/waitingList", function(req,res){

// })

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res){
    return res.json(waitingList);
})


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});