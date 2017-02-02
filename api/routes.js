var express = require('express');
var router = express.Router();

const offers = require('./offers')
const login = require('./login')
const register = require('./register')
const wishlist = require('./wishlist')

/* GET home page. */
router.use('/offers', offers);
router.use('/token', login);
router.use('/users', register);
router.use('/wishlist', wishlist);

module.exports = router;