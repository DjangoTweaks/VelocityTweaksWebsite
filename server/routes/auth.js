const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/user/login" }),
  (req, res) => {
    res.redirect("/home");
  }
);

router.get("/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      res.clearCookie("uid"); // Clear the JWT cookie
      res.redirect("/open");
    });
  });
  
module.exports = router;
