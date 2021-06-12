const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const productCartSchema = new Schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },
  name: String,
  count: Number,
  price: Number,
});

const cartSchema = new Schema(
  {
    products: [ProductCartSchema],
    transaction_id: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);
const ProductCart = mongoose.model("ProductCart", productCartSchema);

module.exports = { Cart, ProductCart };
