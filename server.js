// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var app = express();

//location for static content

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({extended: false }));


//set handle bars for default engine

app.use(methodOverride('_method'))

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


//defining routes

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);




// server configuration

var port = process.env.PORT || 3000;
app.listen(port);