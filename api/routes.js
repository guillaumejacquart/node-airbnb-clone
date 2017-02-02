var express = require('express');
var router = express.Router();

const offers = require('./offers')
const login = require('./token')
const register = require('./users')
const wishlist = require('./wishlist')
const me = require('./me')

/* GET home page. */
router.use('/offers', offers);
router.use('/token', login);
router.use('/users', register);
router.use('/wishlist', wishlist);
router.use('/me', me);

module.exports = router;