var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'username', 'password', {
  // sqlite! now!
  dialect: 'sqlite',
  storage: 'db.sqlite'
})

module.exports = sequelize;