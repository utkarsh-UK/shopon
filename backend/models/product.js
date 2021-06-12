const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 32,
      trim: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
