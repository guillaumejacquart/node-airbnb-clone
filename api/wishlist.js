const express = require('express');
const router = express.Router();
const offer = require('../models/offer');
const passport = require('passport');

/* GET home page. */
router.get('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    offer.findAll().then(function (offersDb) {
        res.json(offersDb);
    });
});

module.exports = router;