const express = require('express')
const passport = require('passport');
const router = express.Router()

/* GET home page. */
router.get('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    res.json(req.user);
})

module.exports = router