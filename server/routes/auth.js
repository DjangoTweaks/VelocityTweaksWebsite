const express = require("express");
const passport = require("passport");
const router = express.Router();

const authController = require('../controllers/authController');

// Google Authentication for Login
router.get(
  "/google/login",
  passport.authenticate("google-login", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback/login",
  passport.authenticate("google-login", { failureRedirect: "/user/signup",  failureMessage: "Email not found, please signup." }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URL);
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
    res.redirect(process.env.CLIENT_URL);
  });
});





//backend endpoint auth.
// router.get('/check-auth', (req, res) => {
//   if (req.isAuthenticated() && req.user && req.user.googleId) {
//     // The user is authenticated and has a googleId in the session
//     res.status(200).send({
//       authenticated: true,
//       googleId: req.user.googleId, // Optionally return the googleId
//     });
//   } else {
//     // The user is not authenticated or googleId is missing
//     res.status(401).send({
//       authenticated: false,
//       message: req.isAuthenticated() ? 'Google ID missing from session' : 'User not authenticated',
//     });
//   }
// });

// Route to check authentication status
router.get('/check-auth', authController.checkAuth);





module.exports = router;
