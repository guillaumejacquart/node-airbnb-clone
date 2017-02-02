var Sequelize = require('sequelize');
var sequelize = require('./db');

var Offer = sequelize.define('offer', {
  name: Sequelize.STRING
});

sequelize.sync();

module.exports = Offer;