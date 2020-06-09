var mongoose = require('mongoose');
//var schema = mongoose.schema;
//const {schema} = mongoose;
var productschema = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name: String,
    price: Number
});
module.exports = mongoose.model('product',productschema);
