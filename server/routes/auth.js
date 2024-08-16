const express = require("express");
const passport = require("passport");
const router = express.Router();

// Google Authentication for Signup
router.get(
  "/google/signup",
  passport.authenticate("google-signup", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback/signup",
  passport.authenticate("google-signup", { failureRedirect: "/user/login", failureMessage: "User already exists. Please login."}),
  (req, res) => {
    res.redirect("/home");
  }
);

// Google Authentication for Login
router.get(
  "/google/login",
  passport.authenticate("google-login", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback/login",
  passport.authenticate("google-login", { failureRedirect: "/user/signup",  failureMessage: "Email not found, please signup." }),
  (req, res) => {
    res.redirect("/home");
  }
);
// Logout route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.clearCookie("uid"); // Clear the JWT cookie
    res.redirect("/open");
  });
});


//backend endpoint auth.

router.get('/check-auth', (req, res) => {
  if (req.isAuthenticated()) {
    res.status(200).send({ authenticated: true });
  } else {
    res.status(401).send({ authenticated: false });
  }
});



module.exports = router;
