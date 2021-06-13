const User = require("../models/user");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array()[0].msg,
      param: errors.array()[0].param,
    });
  }

  const user = new User(req.body);
  user.save((err, savedUser) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: "Could not save user." });
    }

    return res.json({
      email: savedUser.email,
      id: savedUser._id,
      role: savedUser.role,
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array()[0].msg,
      param: errors.array()[0].param,
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({ message: "User email does not exists" });
    }

    if (!user.authenticate(password)) {
      return res
        .status(401)
        .json({ message: "User email or password is incorrect" });
    }

    //create JWT token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);

    // put token in cookie
    res.cookie("token", token, { expire: new Date() + 9999 });

    // send response to front-end
    const { email, role, _id } = user;
    return res.json({ token, user: { email, role, _id } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");

  return res.json({ message: "User signed out successfully." });
};

// protected routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",
});

// custom middlewares
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({ message: "Access Denied" });
  }

  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({ message: "You are not an admin" });
  }

  next();
};
