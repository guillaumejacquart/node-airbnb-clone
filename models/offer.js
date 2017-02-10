var Sequelize = require('sequelize');
var sequelize = require('./db');
var User = require('./user');
var Bed = require('./bed');

var Offer = sequelize.define('offer', {
  title: Sequelize.STRING,
  place_id: Sequelize.STRING,
  number_guests: Sequelize.INTEGER,
  number_bedrooms: Sequelize.INTEGER,
  number_bathrooms: Sequelize.INTEGER,
  type: Sequelize.ENUM('PRIVATE_ROOM', 'SHARED_ROOM', 'FULL'),
  property_type: Sequelize.ENUM('FLAT', 'HOUSE'),
  user_id: {
   type: Sequelize.INTEGER,
   references: {
     model: User,
     key: 'id'
   }
  }
});

Offer.hasMany(Bed, {as: 'beds'})
Bed.associate(Offer);

sequelize.sync({force:true});

module.exports = Offer;