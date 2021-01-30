var express = require("express");
var bodyParser = require("body-parser");
// var mongodb = require("mongodb");
// var ObjectID = mongodb.ObjectID;

// var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Serve static files
// app.use(express.static(__dirname + '/dist/MY_APP_NAME'));

// Send all requests to index.html
// app.get('/*', function(req, res) {
  // res.sendFile(path.join(__dirname + '/dist/MY_APP_NAME/index.html'));
// });

// default Heroku port
app.listen(process.env.PORT || 5000);
