const db = require("./app/models");
const mongoose = require("mongoose");
const {locations} = require("./constants");
const Role = db.role;
const Location = db.location;
const Nav = db.nav;
const SubNav = db.subNav;
const Product = db.product;

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


const createAndPopulateProductsTable = async () => {
  await Product.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await Product.create([
        {
          "id": 1,
          "name": "Rancho",
          "price": 105,
          "urlImg": "menu/thumbs/version_220x310x1/c16804bcd0d47fce6c6d033b694a09fe.jpg"
        },
        {
          "id": 2,
          "name": "Neapolitana",
          "price": 105,
          "urlImg": "menu/thumbs/version_220x310x1/c1dcb23f8376fc6ead3aeec68b59a2d0.jpg"
        },
        {
          "id": 3,
          "name": "Greek",
          "price": 110,
          "urlImg": "menu/thumbs/version_220x310x1/abe848cde189206049cae70fee65b2ad.jpg"
        },
        {
          "id": 4,
          "name": "Mario",
          "price": 105,
          "urlImg": "menu/thumbs/version_220x310x1/1d9d15e01830693aa9d0e6b5851dd8d6.jpg"
        },
        {
          "id": 5,
          "name": "Pepperoni",
          "price": 105,
          "urlImg": "menu/thumbs/version_220x310x1/3a9c24985cb363b8cc326e00e39cad6e.jpg"
        }
      ])

    }
  });

}


module.exports = {
  createRolesTable,
  createLocationsTable,
  createNavTable,
  createAndPopulateSubNavTable,
  createAndPopulateProductsTable
};


