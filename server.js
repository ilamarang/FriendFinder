//Setup appropriate Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Include the routes file
var apiRoutes = require('./routing/apiRoutes');
var htmlRoutes = require('./routing/htmlRoutes');
//Set up Express app
var app = express();
var PORT = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//Setup static content
app.use(express.static('public'));

//Routes
app.use(require('./routing/htmlRoutes'));

app.use(require('./routing/apiRoutes'));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
