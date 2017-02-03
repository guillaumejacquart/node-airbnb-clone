const _ = require("lodash")
const jwt = require('jsonwebtoken')

const passport = require("passport")
const passportJWT = require("passport-jwt")

const jwt_options = require('./jwt_options')
const user = require('../models/user')

const JwtStrategy = passportJWT.Strategy

var strategy = new JwtStrategy(jwt_options, (jwt_payload, next) => {
    // usually this would be a database call:
    user.findById(jwt_payload.id, {
        attributes: { exclude: ['password'] }
    }).then(function (userDb) {
        if (!userDb) {
            next(null, false);
        }
        next(null, userDb);
    })
});

passport.use(strategy);

module.exports = passport;