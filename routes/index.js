var express = require('express');
var router = express.Router();

var data = require('../data');

router.get('/', function(req, res) {
    res.render('index.html', { data : data });
});

router.get('/cv(.html)?', function(req, res) {
    res.render('cv.html', { data : data });
});

module.exports = router;
