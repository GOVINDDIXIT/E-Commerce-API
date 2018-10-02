//Dependencies
var express = require('express');
var router = express.Router();

//Models
var product = require('../models/products');

//Routes
product.methods(['get','put','post','delete']);
product.register(router, '/products');
router.get('/products',function(req,res){
    res.send('api is working');
});

//Return router
module.exports = router;