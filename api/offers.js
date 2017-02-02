var express = require('express');
var router = express.Router();
var offer = require('../models/offer');

/* GET home page. */
router.get('/', function (req, res, next) {
    offer.findAll().then(function (offersDb) {
        res.json(offersDb);
    });
});

module.exports = router;