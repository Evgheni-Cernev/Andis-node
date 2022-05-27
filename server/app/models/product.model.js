const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    city: String,
    phoneNumber: String,
  })
);

module.exports = Product;