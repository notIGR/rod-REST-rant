const router = require("express").Router();
const { render } = require("react-dom");
const places = require("../models/places.js");

//edit
router.get("/:id/edit", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res, render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/edit", { place: places[id], id });
  }
});

//PUT route
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    if (!req.body.pic) {
      // default image
      req.body.pic = "http://placekitten.com/400/400";
    }
    //default city
    if (!req.body.city) {
      req.body.city = "Anytown";
    }
    //defauly usa
    if (!req.body.state) {
      req.body.state = "USA";
    }
    // Save the new data into places[id]
    places[id] = req.body;
    res.redirect(`/places/${id}`);
  }
});

//delete
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    res.redirect("/places");
  }
});

// get/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

router.post("/", (req, res) => {
  if (!req.body.pic) {
    //default pic if none if provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "FlavorTown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

//get /places
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

//showpPage
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id], id });
  }
});

module.exports = router;
