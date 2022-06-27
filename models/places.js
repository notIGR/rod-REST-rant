const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cusisines: { type: String, required: true },
  city: { type: String, default: "Flavortown" },
  state: { type: String, default: "USA" },
  founded: Number,
});

module.exports = mongoose.model("Place", placeSchema)

module.exports = [
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
