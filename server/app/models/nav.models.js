const mongoose = require("mongoose");

const Schema = mongoose.Schema
const Nav = mongoose.Schema({
    href: String,
    title: String,
    subMenu: [{
        type: Schema.Types.ObjectID,
        ref: "SubNav"
    }]
});

module.exports = mongoose.model('Nav', Nav);