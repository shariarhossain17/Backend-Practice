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
    unique: true,
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
          ref: "Product",
        },
        quantity: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

userSchema.methods.addToCart = async function (product) {
  const cartProductIndex = await this.cart.items.findIndex((cp) => {
    return cp.productId.toString() === product._id.toString();
  });

  let newQuantity = 1;
  const updatedCartItems = await [...this.cart.items];
  if (cartProductIndex >= 0) {
    newQuantity =
      (await parseInt(this.cart.items[cartProductIndex].quantity)) +
      parseInt(1);
    updatedCartItems[cartProductIndex].quantity = newQuantity;
  } else {
    await updatedCartItems.push({
      productId: product._id,
      quantity: newQuantity,
    });
  }

  const updateCart = {
    items: updatedCartItems,
  };

  this.cart = await updateCart;
  return this.save();
};

const User = mongoose.model("User", userSchema);

module.exports = User;
