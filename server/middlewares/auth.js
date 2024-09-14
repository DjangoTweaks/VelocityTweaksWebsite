const { getUser } = require("../service/auth");

function restrictToLoggedInUserOnly(req, res, next) {
  const userUid = req.cookies?.uid;
  if (req.isAuthenticated()) {
    return next();
  }

  if (!userUid) {
    return res.redirect("/user/login");
  }

  const user = getUser(userUid);

  if (!user) {
    return res.redirect("/user/login");
  }

  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedInUserOnly,
};
