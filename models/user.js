var Sequelize = require('sequelize');
var sequelize = require('./db');
var Offer = require('./offer');

var User = sequelize.define('user', {
  username: {type: Sequelize.STRING, allowNull: false},
  password: {
    type: Sequelize.STRING, 
    allowNull: false
  },
  firstname: {type: Sequelize.STRING, allowNull: false},
  lastname: {type: Sequelize.STRING, allowNull: false},
  birthdate: {type: Sequelize.DATE, allowNull: false}
}, {
  classMethods: {
    getProperties: function(idUser){ 
		return Offer.findAll({
			where: {
				user_id: idUser
			}
		})
	}
  },
});

sequelize.sync();

module.exports = User;