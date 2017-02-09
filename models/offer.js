var Sequelize = require('sequelize');
var sequelize = require('./db');

var Offer = sequelize.define('offer', {
  title: Sequelize.STRING,
  place_id: Sequelize.STRING,
  number_guests: Sequelize.INTEGER,
  type_place: Sequelize.ENUM('PRIVATE_ROOM', 'SHARED_ROOM', 'FULL')
});

sequelize.sync();

module.exports = Offer;