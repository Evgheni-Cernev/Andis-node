const db = require("../models");
const Nav = db.nav;


exports.nav = async (req, res) => {
  // const a = Nav.find({})
  
  // res.status(200).send("ldldld");
  Nav.find({}).populate("subMenu", "-__v")
    .exec((err, nav) => {
      console.warn(JSON.stringify(nav, null, 2))
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!nav) {
        return res.status(404).send({ message: "User Not found." });
      }
      res.status(200).send(nav);
    });
};
