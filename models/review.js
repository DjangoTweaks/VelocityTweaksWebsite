const mongoose = require('mongoose');
const { type } = require('os');


const reviewSchema = new mongoose.Schema({
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

const REVIEW = mongoose.model("review", reviewSchema)
module.exports= REVIEW