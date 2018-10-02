var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    sku: String
});

//Return model
module.exports = restful.model('Products',productSchema);