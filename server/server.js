var express = require('express'); //whatever express has in module.exports
var bodyParser = require('body-parser');
var getNumbers = require('./routes/get-numbers');
var port = 7000;

var app = express();


app.use(express.static('server/public'));
//makes a lot of those choices for us to send static files
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/calculate', getNumbers);


app.listen (port, function(){
    console.log('listening on port', port);
});