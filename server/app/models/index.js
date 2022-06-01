const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.location = require("./locations.model");
db.nav = require('./nav.models');
db.subNav = require('./subNav.models');
db.product = require('./product.model');
db.box= require('./box.model');

module.exports = db;
