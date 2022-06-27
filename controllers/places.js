const router = require("express").Router();
const db = require("../models");

//wont need this require eventually?

//get /places
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

//put
router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// get/new
router.get("/new", (req, res) => {
  res.render("places/new"); //fith
});

//showpPage
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
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
    res.send("PUT .places/:id stub"); //third
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
    res.send("DELETE /places/:id stub"); //second
  }
});

//edit
router.get("/:id/edit", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res, render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.send("GET edit form stub"); //first thing to change from bottom
  }
});

module.exports = router;
