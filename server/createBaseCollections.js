const db = require("./app/models");
const mongoose = require("mongoose");
const {locations} = require("./constants");
const Role = db.role;
const Location = db.location;
const Nav = db.nav;
const SubNav = db.subNav;

const createRolesTable = async () => {
  await Role.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await Role.create([
        {
          name: "user"
        },
        {
          name: "moderator"
        },
        {
          name: "admin"
        },
      ])
    }
  })
}


const createLocationsTable = async () => {

  await Location.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await Location.create(locations)
    }
  })
}


const createNavTable = async () => {
  await Nav.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await Nav.create([
        {
          _id: new mongoose.Types.ObjectId(),
          "href": "/catalog",
          "title": "menu",
        },
        {
          _id: new mongoose.Types.ObjectId(),
          "href": "/restaurants",
          "title": "restaurants"
        },
        {
          _id: new mongoose.Types.ObjectId(),
          "href": "/news",
          "title": "news"
        }
      ])
    }
  })
}

const createAndPopulateSubNavTable = async () => {
  await SubNav.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await SubNav.create([
        {

          "type": "menu",
          "title": "Pizza"
        },
        {

          "type": "restaurants",
          "title": "Salads"
        },
        {

          "type": "menu",
          "title": "Snacks"
        },
        {

          "type": "restaurants",
          "title": "Anons Menu"
        },
        {

          "type": "menu",
          "title": "Soups"
        },
        {

          "type": "menu",
          "title": "Main Dishes"
        },
        {

          "type": "restaurants",
          "title": "Box"
        },
        {

          "type": "menu",
          "title": "Happy Box"
        },
        {

          "type": "menu",
          "title": "Breakfast"
        },
        {

          "type": "menu",
          "title": "Party menu"
        },
        {

          "type": "menu",
          "title": "Lunch Box - Announcement"
        },
        {

          "type": "menu",
          "title": "Andy`s Bakery"
        },
        {

          "type": "menu",
          "title": "Cake"
        },
        {

          "type": "menu",
          "title": "Dessert"
        },
        {

          "type": "menu",
          "title": "Semi-finished products"
        },
        {

          "type": "menu",
          "title": "Supplements"
        },
        {

          "type": "menu",
          "title": "Beverages"
        },
        {

          "type": "restaurants",
          "title": "Beverages"
        },
        {

          "type": "menu",
          "title": "Alcohol"
        },
        {

          "type": "menu",
          "title": "Cutlery"
        }
      ])
      await db.nav.find({}, async (err, navItems) => {
        navItems.forEach(async nav => {
          await db.nav.findByIdAndUpdate(
            nav._id,
            { $push: { subMenu: (await db.subNav.find({ type: nav.title })) } },
            { new: true, useFindAndModify: false }
          )
        })
      })
    }
  });

}


module.exports = {
  createRolesTable,
  createLocationsTable,
  createNavTable,
  createAndPopulateSubNavTable,
};


