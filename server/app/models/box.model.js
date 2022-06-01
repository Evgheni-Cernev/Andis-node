const mongoose = require("mongoose");

const Box = mongoose.model(
  "Box",
  new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    userBox: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      }
    ]
  })
);

module.exports = Box;