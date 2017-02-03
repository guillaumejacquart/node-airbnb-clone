const express = require('express')
const passport = require('passport');
const router = express.Router()

const user = require('../models/user')

/* GET home page. */
router.get('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    res.json(req.user);
})

router.post('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    user.findOne({
        where: {
            username: req.body.username
        }
    }).then(function (userDb) {
        if (!userDb) {
            return res.status(400).json({ message: "User does not exists" })
        }
		
		var toUpdate = req.body;
		console.log(toUpdate)
		userDb.update(toUpdate).then((newUser) => {
			res.json({ message: "ok" })
		})
    })
})

module.exports = router