const mongoose = require("mongoose");

const Category = mongoose.model(
  "Category",
  new mongoose.Schema({
    city: String,
    phoneNumber: String,
  })
);

module.exports = Category;