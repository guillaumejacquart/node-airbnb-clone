const passportJWT = require("passport-jwt")

const ExtractJwt = passportJWT.ExtractJwt

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'tasmanianDevil';

module.exports = jwtOptions;