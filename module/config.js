const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/MEESHO")

.then(() => console.log("MEESHO DB CONNECTED"))
.catch((err) => console.log(err.message))