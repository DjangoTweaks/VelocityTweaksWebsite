

const User = require("../model/user")
const {getUser, setUser, } = require("../service/auth")
const {v4: uuidv4} = require("uuid");
const {restrictToLoggedInUserOnly} = require("../middlewares/auth")
const nodemailer = require("nodemailer");

//user signup no hashing here
async function handleUserSignUP(req, res){

   const { name, email, password} = req.body;

   await User.create({
    name,
    email,
    password,

   });
   return res.render("home")
}



//user login

async function handleUserlogin(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.render("login", {
                error: "Invalid username or password", // Corrected key to lowercase 'error'
            });
        }

       
        const token = setUser(user);
        res.cookie("uid", token,{ httpOnly: true });  // Cookie with name "uid" points to the sessionId

        return res.redirect("/home");
    } catch (error) {
        console.error("Error during user login:", error); // Added error logging
        return res.status(500).json({ message: "Internal server error" });
    }
}


async function handleUserLogout(req, res) {
    res.clearCookie("uid");
    req.logout((err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
      }
      res.redirect("/open");
    });
  }



// Forgot password
async function handleForgotPassword(req, res) {
    const { email } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.render("forgotPassword", {
          message: "Email not found",
        });
      }
  
      const token = uuidv4();
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
      await user.save();
  
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "dawkarad2002@gmail.com",
          pass: "rrmh aodn oydg qeoj",
        },
      });
  
      const mailOptions = {
        to: user.email,
        from: 'dawkarad2002@gmail.com',
        subject: 'Password Reset',
        text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
          `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
          `http://${req.headers.host}/user/reset-password/${token}\n\n` +
          `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
      };
  
      await transporter.sendMail(mailOptions);
  
      return res.render("forgotPassword", {
        message: "An e-mail has been sent to " + user.email + " with further instructions.",
      });
    } catch (error) {
      console.error("Error during forgot password:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  
  // Reset password
  async function handleResetPassword(req, res) {
    const { token } = req.params;
    const { password } = req.body;
    try {
      const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() },
      });
  
      if (!user) {
        return res.render("resetPassword", {
          token,
          message: "Password reset token is invalid or has expired.",
        });
      }
  
      user.password = password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      await user.save();
  
      return res.render("login", {
        message: "Password has been reset. You can now log in with the new password.",
      });
    } catch (error) {
      console.error("Error during reset password:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  
  module.exports = {
    handleUserSignUP,
    handleUserlogin,
    handleUserLogout,
    handleForgotPassword,
    handleResetPassword,
  };