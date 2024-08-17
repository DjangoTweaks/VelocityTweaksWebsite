const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        googleId: {
            type: String,
            unique: true,
            sparse: true,
        },
        photo:{
            type:String,

        },
        resetPasswordToken: String,
        resetPasswordExpires: Date,
    },
    { timestamps: true }
);
const User = mongoose.model("user", userSchema);
module.exports = User;
