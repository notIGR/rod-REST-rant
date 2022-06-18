const router = require("express").Router();
const places = require("../models/places.js");

// get/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

router.post("/", (req, res) => {
  if (!req.body.pic) {
    //default pic if none if provided
    req.body.pic = "http://placekitten.com/400/400"
  }
  if (!req.body.city) {
    req.body.city = "FlavorTown"
  }
  if(!req.body.state) {
    req.body.state = "USA"
  }
  places.push(req.body)
  res.redirect("/places");
});

//get /places
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

module.exports = router;
