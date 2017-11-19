var express = require('express');
var router = express.Router();
var objectArray = require('../modules/toCalculate');
var theCalculator = require('../modules/theCalculator')

router.get('/calculate', function (req, res) {
    console.log('am I logging?')
    
});


router.get('/all', function (req, res){
    for (var i = 0; i < objectArray.length; i++){
        res.send(objectArray[i]);
    }
   
})

router.post('/new', function (req, res){
    console.log('hello is this logging on the terminal')
    objectArray.push({inputOne: req.body.input_one, 
    inputTwo: req.body.input_two, typeOfMath: req.body.type_of_math}); //adding to toCalculate array
    res.sendStatus(200);
})

// router.post('/new', function (req, res){
//     console.log('hello is this logging on the terminal')
//     objectArray.push({inputOne: req.body.input_one, 
//     inputTwo: req.body.input_two, typeOfMath: req.body.type_of_math}); //adding to toCalculate array
//     res.sendStatus(200);
// })

module.exports = router;


// var inputOne = $('#inputOne').val()
// var inputTwo = $('#inputTwo').val()

// router.get('/calculations', function (req, res){
//     if (type_of_math == "add"){
//         return input_one + input_two
//     }
//     else if (type_of_math == "subract"){
//         return input_one - input_two
//     }
// })

// console.log(addPush());