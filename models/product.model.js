const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide your product name"],
  },
  price: {
    type: Number,
    required: [true, "please provide your price"],
  },
  desc: {
    type: String,
    required: [true, "please provide description"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
