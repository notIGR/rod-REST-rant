const router = require("express").Router();

// get/new
router.get("/new", (req, res) => {
  res.render("places/new");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST /places");
});

//get /places
router.get("/", (req, res) => {
  const places = [
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
