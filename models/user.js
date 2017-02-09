var Sequelize = require('sequelize');
var sequelize = require('./db');

var User = sequelize.define('user', {
  username: {type: Sequelize.STRING, allowNull: false},
  password: {
    type: Sequelize.STRING, 
    allowNull: false
  },
  firstname: {type: Sequelize.STRING, allowNull: false},
  lastname: {type: Sequelize.STRING, allowNull: false},
  birthdate: {type: Sequelize.DATE, allowNull: false}
});

sequelize.sync();

module.exports = User;