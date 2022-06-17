const router = require("express").Router();

// get/new
router.get("/new", (req, res) => {
  res.render("places/new")
})

//get /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/sammy.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/smore.jpg",
    },
  ];

  res.render("places/index", { places });
});

module.exports = router;
