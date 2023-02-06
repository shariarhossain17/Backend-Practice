const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  cart: {
    items: [
      {
        productId: {
          type: ObjectId,
          required: true,
        },
        quantity: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

const User = mongoose.model("User", userSchema);
