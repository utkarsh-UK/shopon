const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const {
  getUserById,
  getUser,
  getAllUsers,
  updateUser,
  getPurchaseList,
} = require("../controllers/user");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.get("/users", isSignedIn, isAuthenticated, isAdmin, getAllUsers);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
router.put(
  "/orders/user/:userId",
  isSignedIn,
  isAuthenticated,
  getPurchaseList
);

module.exports = router;
