var express = require('express');
var router = express.Router();

router.get('/calculate', function (req, res) {
    console.log('am I logging?')
    res.send('Hello is this working');
    
});

module.exports = router;