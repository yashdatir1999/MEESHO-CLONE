const mongoose = require("mongoose")

const plm = require("passport-local-mongoose")

const userdata = new mongoose.Schema({
    username: {
        type: String
    },
    mobile: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    address: {
        type: String
    },
    otp: {
        type: Number,
        default: -1
    }

})

userdata.plugin(plm)

module.exports = mongoose.model("userdetail" , userdata)