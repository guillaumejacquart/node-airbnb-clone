const express = require('express')
const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');
const router = express.Router()

const user = require('../models/user')

/* GET home page. */
router.get('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    res.json(req.user);
})

router.post('/', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    user.findById(req.user.id).then(function (userDb) {
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

router.post('/password', passport.authenticate('jwt', { session: false }), function (req, res, next) {
    user.findById(req.user.id).then(function (userDb) {
        if (!userDb) {
            return res.status(400).json({ message: "User does not exists" })
        }

        bcrypt.compare(req.body.oldPassword, userDb.password, function (err, result) {
            if (result) {
                bcrypt.hash(req.body.newPassword, null, null, (err, hash) => {
                    userDb.password = hash;
                    userDb.save().then((newUser) => {
                        res.json({ message: "ok"})
                    })
                })
            } else {
                return res.status(401).json({
                    message: "passwords did not match",
                    error: err
                })
            }
        });
    })
})

module.exports = router