const express = require("express");
const { handleUserSignUP, 
    handleUserlogin, 
    handleUserLogout, 
    handleForgotPassword, 
    handleResetPassword } = require("../controllers/user");
const router = express.Router();

router.post("/",);

router.get("/signup", (req, res) => {
    res.render("signup");
});

router.post("/signup", handleUserSignUP);
router.post("/login", handleUserlogin);
router.get("/login", (req, res) => {
    res.render("login");
});

// Logout route
router.post("/logout", handleUserLogout);
router.get("/logout", handleUserLogout);

// Forgot password routes
router.get("/forgot-password", (req, res) => {
    res.render("forgotPassword");
});
router.post("/forgot-password", handleForgotPassword);

// Reset password routes
router.get("/reset-password/:token", (req, res) => {
    res.render("resetPassword", { token: req.params.token });
});
router.post("/reset-password/:token", handleResetPassword);

module.exports = router;
