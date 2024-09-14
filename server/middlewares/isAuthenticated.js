const express = require("express");
const router = express.Router();


// Controller to handle authentication check
const isAuthenticated = (req, res) => {
    if (req.isAuthenticated() && req.user && req.user.googleId) {
      // The user is authenticated and has a googleId in the session
      // res.status(200).send({
      //   authenticated: true,
      //   googleId: req.user.googleId, // Optionally return the googleId
      // });
      return next();
    } else {
      // The user is not authenticated or googleId is missing
      res.status(401).send({
        authenticated: false,
        message: req.isAuthenticated() ? 'Google ID missing from session' : 'User not authenticated',
      });
    }
  };


module.exports = isAuthenticated;