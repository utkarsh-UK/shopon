const User = require("../models/user");
const { validationResult } = require("express-validator");

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

exports.signout = (req, res) => {
  return res.json({ message: "Bye. You are now signed out" });
};
