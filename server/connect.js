const mongoose = require("mongoose");

async function connectMongoDB(d2){
    return mongoose.connect(d2)
}

module.exports={
    connectMongoDB,
}