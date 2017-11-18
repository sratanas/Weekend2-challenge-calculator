var express = require('express'); //whatever express has in module.exports
var bodyParser = require('body-parser');
var getNumbers = require('./routes/get-numbers');
var port = 7000;

var app = express();


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/get-numbers', getNumbers);

app.listen (port, function(){
    console.log('listening on port', port);
});


// app.get('/calculate', function(req, res){
//     res.send('Hello????');
// });