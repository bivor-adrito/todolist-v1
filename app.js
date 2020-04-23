// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();
app.set('view engine', 'ejs');
 
app.get('/', function (req, res) {

    var today = new Date(); // this is a js Date constructor which i had put in a var to create an object see MDN js Date() docs to learn more;
    var currentDay = today.getDay();
     var day = "";

    //Date.getDay is a built in js function which gives the value from 0-6
    switch (currentDay) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";

        default:
            console.log("Error current day is equal to: " + currentDay);
      }

    res.render('list', {kindOfDay: day});
  //res.send('Hello World');
});
 
app.listen(3000, function(){
    console.log("Server is running on port 3000");
});