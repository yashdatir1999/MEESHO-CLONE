const mongoose = require("mongoose")

const productdata = new mongoose.Schema({
    catagory: {
        type: String,
        required: [true , "CATAGORY MUST REQUIRE"]
    },
    subcatagory: {
        type: String,
        required: [true , "SUB-CATAGORY MUST REQUIRE"]
    },
    productname: {
        type: String,
        required: [true , "PRODUCT NAME MUST REQUIRE"]
    },
    productprice: {
        type: String,
        required: [true , "PRODUCT PRICE MUST REQUIRE"]
    },
    off: {
        type: Number,
        required: [true , "PRODUCT PRICE MUST REQUIRE"]
    },
    reviews: {
        type: Number,
        required: [true , "PRODUCT PRICE MUST REQUIRE"]
    },
    rating: {
        type: Number,
        required: [true , "PRODUCT PRICE MUST REQUIRE"]
    },
    soldby: {
        type: String,
        required: [true , "PRODUCT PRICE MUST REQUIRE"]
    },
    availablequantity: {
        type: Number,
        required: [true , "PRODUCT PRICE MUST REQUIRE"]
    },
    deliverycharges: {
        type: Number,
        required: [true , "PRODUCT PRICE MUST REQUIRE"]
    },
    COD: {
        type: String,
        required: [true , "PRODUCT PRICE MUST REQUIRE"]
    },
    country: {
        type: String,
        required: [true , "PRODUCT PRICE MUST REQUIRE"]
    },
    imglink1: {
        type: String,
        required: [true , "PRODUCT PRICE MUST REQUIRE"]
    },
    imglink2: {
        type: String,
        required: [true , "PRODUCT PRICE MUST REQUIRE"]
    },
    imglink3: {
        type: String,
        required: [true , "PRODUCT PRICE MUST REQUIRE"]
    },
    imglink4: {
        type: String,
        required: [true , "PRODUCT PRICE MUST REQUIRE"]
    },
    description: {
        type: String,
        required: [true , "PRODUCT PRICE MUST REQUIRE"]
    }
})

module.exports = mongoose.model("MEESHOPRODUCT" , productdata)