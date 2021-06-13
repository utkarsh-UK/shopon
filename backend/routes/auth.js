const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("email", "Email is not valid").isEmail(),
    check("password", "Password should be at least 3 char long").isLength({
      min: 3,
    }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "Email is not valid").isEmail(),
    check("password", "Password is required").isLength({ min: 1 }),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
