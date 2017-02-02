var Sequelize = require('sequelize');
var sequelize = require('./db');

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

sequelize.sync();

module.exports = User;