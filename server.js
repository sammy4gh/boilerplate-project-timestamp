// server.js
// where your node app starts

// init project
const moment = require('moment')
const timezone = require('moment-timezone')
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const {isDate} = require("moment/moment");
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date", (req, res) => {
 const date = req.params.date
    const nd = new Date(Date.parse(date))
    if (new Date(Date.parse(date))){
        res.json({
            "unix": Date.parse( date),
            "utc" : moment(nd).format("ddd, DD  MMM YYYY HH:mm:ss ZZ" )
        })
    }else if ( !isDate(date) ){
        res.json({
            error : "Invalid Date"
        })

    }else{
        res.json({"unix": Date.now()})
    }




})

// listen for requests :)
var listener = app.listen(process.env.PORT || 5000 , function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
