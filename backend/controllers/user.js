const User = require("../models/user");
const Cart = require("../models/cart");

exports.getUserById = (req, res, next, id) => {
  User.findById(id).execute((err, user) => {
    if (err || !user) {
      return res.status(400).json({ message: "No user was found in DB" });
    }

    req.profile = user;
    next();
  });
};

exports.getUser = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.__v = undefined;

  return res.json(req.profile);
};

exports.getAllUsers = (req, res) => {
  User.find()
    .select("_id email role")
    .execute((err, users) => {
      if (err || !users) {
        return res.status(400).json({ message: "No users was found in DB" });
      }

      return res.json({ users });
    });
};

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err || !users) {
        return res.status(400).json({ message: "Cannot update this user" });
      }

      user.salt = undefined;
      user.encry_password = undefined;
      return res.json({ user });
    }
  );
};

exports.getPurchaseList = (req, res) => {
  Cart.find({ user: req.profile._id }).populate("user", "_id email");
  exec((err, order) => {
    if (err) {
      return res.status(400).json({ error: "No order for this account" });
    }
  });
};
