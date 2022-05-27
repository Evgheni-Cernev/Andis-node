const mongoose = require("mongoose");
const SubNav = mongoose.model(
    "SubNav",
    new mongoose.Schema({
        type: String,
        title: String,
    })
);

module.exports = SubNav;
