const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')
const router = express.Router()

const jwt_options = require('../auth/jwt_options');
const user = require('../models/user')

/* GET home page. */
router.post('/', function (req, res, next) {
    console.log(req.body)
    user.findOne({
        where: {
            username: req.body.username
        }
    }).then(function (userDb) {
        if (!userDb) {
            return res.status(401).json({ message: "no such user found" })
        }
        bcrypt.compare(req.body.password, userDb.password, function (err, result) {
            if (result) {
                // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
                var payload = { id: userDb.id }
                var token = jwt.sign(payload, jwt_options.secretOrKey)
                res.json({ message: "ok", token: token })
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