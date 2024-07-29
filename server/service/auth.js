const jwt = require("jsonwebtoken");
const secret = "Aaditya@3737";


function setUser(user){
    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, secret);           // assigning user as my payload.

}

function getUser(token){
   try{
    return jwt.verify(token, secret);
   }catch(error){
    return null;
   }
} 

module.exports = {
    setUser,
    getUser,
}