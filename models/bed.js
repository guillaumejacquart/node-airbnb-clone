var Sequelize = require('sequelize');
var sequelize = require('./db');

var Bed = sequelize.define('bed', {
  offer_id: { type: Sequelize.INTEGER, allowNull: false },
  type: { type: Sequelize.ENUM('SINGLE', 'DOUBLE', 'CONVERTIBLE', 'COUCH'), allowNull: false },
  quantity: { type: Sequelize.INTEGER, allowNull: false }
}, {
    classMethods: {
      associate: function (Offer) {
        Bed.belongsTo(Offer, { foreignKey: 'offer_id', targetKey: 'id' })
      }
    }
  });

sequelize.sync({ force: true });

module.exports = Bed;