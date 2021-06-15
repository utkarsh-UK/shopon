const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  getAllProducts,
} = require("../controllers/product");

router.param("userId", getUserById);
router.param("productId", getProductById);

router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

router.post(
  "/product/create/:userId/photo",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

router.get("/products", getAllProducts);

module.exports = router;
