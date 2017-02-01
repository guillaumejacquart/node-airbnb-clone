var express = require('express');
var app = express();
var jwt = require('express-jwt');

var jwtCheck = jwt({
  secret: 'f04LukyxfEheKMhbywO5oUM5bPDOJz9cmvJGuVk2ZBlqwdjJ_TBWB5hnDE28BHZd',
  audience: '8IOYZWvOH4jjfH8lOiPa2GYZtuXZaDvr'
});