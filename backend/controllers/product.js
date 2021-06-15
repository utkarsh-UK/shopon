const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getProductById = (req, res, next, id) => {
  Product.findById(id).exec((err, product) => {
    if (err || !product) {
      return res.status(400).json({ message: "Product not found" });
    }

    req.product = product;
    next();
  });
};

exports.createProduct = (req, res) => {
  let form = formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res
        .status(400)
        .json({ message: "Could not process file at the moment." });
    }

    // destructure the fields
    const { name, rating, price } = fields;
    if (!name || !rating || !price) {
      return res.status(400).json({
        error: "Please, include all fields",
      });
    }

    let product = new Product(fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res
          .status(400)
          .json({ message: "File size too big. Should be less than 3 MB" });
      }

      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }

    //save to db
    product.save((err, product) => {
      if (err) {
        return res.status(400).json({ message: "Could not save product" });
      }

      return res.json({ product });
    });
  });
};

exports.getProduct = (req, res) => {
  req.product.photo = undefined;
  return res.json(req.product);
};

exports.getAllProducts = (req, res) => {
  const limit = req.query.limit ? +req.query.limit : 8;
  const sortBy = req.query.sortBy || "_id";

  Product.find()
    .select("-photo")
    .sort([[sortBy, "asc"]])
    .limit(limit)
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({ error: "NO products FOUND" });
      }

      res.json(products);
    });
};

// middleware
exports.photo = (req, res, next) => {
  if (req.product.photo.data) {
    res.set("Content-Type", req.product.photo.contentType);
    return res.send(req.product.photo.data);
  }

  next();
};
