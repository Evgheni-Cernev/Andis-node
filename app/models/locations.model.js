const mongoose = require("mongoose");

const Location = mongoose.model(
  "Location",
  new mongoose.Schema({
    city: String,
    phoneNumber: String,
  })
);

module.exports = Location;
