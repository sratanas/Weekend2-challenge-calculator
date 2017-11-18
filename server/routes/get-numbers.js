var express = require('express');
var router = express.Router();
var objectArray = require('../modules/toCalculate');

router.get('/calculate', function (req, res) {
    console.log('am I logging?')
    
});

router.get('/all', function (req, res){
    res.send(objectArray);
})

router.post('/new', function (req, res){
    console.log('hello is this logging on the terminal')
    objectArray.push({inputOne: req.body.input_one, 
    inputTwo: req.body.input_two, typeOfMath: req.body.type_of_math}); //adding to quotes-data
    res.sendStatus(200);
})

module.exports = router;


// var inputOne = $('#inputOne').val()
// var inputTwo = $('#inputTwo').val()
// function addPush(inputOne, inputTwo){
//     var answer = Number(inputOne) + Number(inputTwo);    
//     return answer;
// }

// console.log(addPush());