// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

var items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}))
 
app.get('/', function (req, res) {

    var today = new Date(); // this is a js Date constructor which i had put in a var to create an object see MDN js Date() docs to learn more;
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    var day = today.toLocaleDateString("en-US", options);

   
    res.render('list', {kindOfDay: day, newListItem: items});

  //res.send('Hello World');
});

app.post("/", function(req, res){
    item = req.body.newItem;

    items.push(item);

    res.redirect("/");

});
 
app.listen(3000, function(){
    console.log("Server is running on port 3000");
});