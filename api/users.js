const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')
const router = express.Router()

const jwt_options = require('../auth/jwt_options');
const user = require('../models/user')

/* GET home page. */
router.post('/', function (req, res, next) {
    user.findOne({
        where: {
            username: req.body.username
        }
    }).then(function (userDb) {
        if (userDb) {
            return res.status(400).json({ message: "User already exists" })
        }

        bcrypt.hash(req.body.password, null, null, (err, hash) => {
			var toCreate = req.body;
			toCreate.password = hash;
            user.create(toCreate).then((newUser) => {
                var payload = {
                    id: newUser.id
                }
                var token = jwt.sign(payload, jwt_options.secretOrKey)
                res.json({ message: "ok", token: token })
            })
        })
    })
})

module.exports = router