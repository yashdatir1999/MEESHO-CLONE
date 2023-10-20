const mongoose = require("mongoose")

const productdata = new mongoose.Schema({
    catagory: String,
    subcatagory: String,
    productname: String,
    productprice: Number,
    off: Number,
    reviews: Number,
    rating: Number,
    soldby: String,
    availablequantity: Number,
    deliverycharges: Number,
    COD: String,
    country: String,
    imglink1: String,
    imglink2: String,
    imglink3: String,
    imglink4: String,
    description: String
})

module.exports = mongoose.model("MEESHOPRODUCT" , productdata)