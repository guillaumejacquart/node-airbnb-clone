var express = require('express');
var router = express.Router();
var offer = require('../models/offer');

/* GET home page. */
router.get('/', function (req, res, next) {
    offer.findAll().then(function (offersDb) {
        if (offersDb.length) {
            return res.json(offersDb);  
        }
        return res.json([{
            id: 1,
            position: { lat: 62.323907, lng: -150.109291 },
            title: 'youpi',
            price: Math.random() * 50 + ' €',
            description: 'Awesome description',
            image: 'https://a0.muscache.com/im/pictures/57211566/d42d8735_original.jpg?aki_policy=x_medium'
        }, {
            id: 2,
            position: { lat: 62.353907, lng: -150.119291 },
            title: 'youpi',
            price: Math.random() * 50 + ' €',
            description: 'Awesome description',
            image: 'https://a0.muscache.com/im/pictures/57211566/d42d8735_original.jpg?aki_policy=x_medium'
        }, {
            id: 3,
            position: { lat: 62.303907, lng: -150.99291 },
            title: 'youpi',
            price: Math.random() * 50 + ' €',
            description: 'Awesome description',
            image: 'https://a0.muscache.com/im/pictures/57211566/d42d8735_original.jpg?aki_policy=x_medium'
        }]);
    });
});

module.exports = router;