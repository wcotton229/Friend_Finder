// Dependencies
// ===================================================

var express = require("express");
var bodyParser = require("body-parser");

// Creating express server
var app = express();

// Setting port
var PORT = process.env.PORT || 8080;

//  Sets up Express app too handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Routes to map server
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener for server

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);    
});