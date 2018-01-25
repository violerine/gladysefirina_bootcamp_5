const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/productdetailbc4");

const cartSchema = new mongoose.Schema({
    productid :String,
    productname:String,
    productimage:String,
    productprice:Number,
    quantity:Number
})

const cart = mongoose.model("cart",cartSchema)

module.exports = cart;