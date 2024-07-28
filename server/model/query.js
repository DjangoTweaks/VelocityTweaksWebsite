const mongoose = require('mongoose');
const { type } = require('os');


const querySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    email:{
        type:String,
        required: true,
    },

    message:{
        type: String,
        required: true,
    },
    
    date:{
        type: Date,
        default: Date.now,
    }

})

const QUERY = mongoose.model("query", querySchema)
module.exports= QUERY