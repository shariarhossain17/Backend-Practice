const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

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
  password:{
    type:String,
    require:true,
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


userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {

    return next();
  }
  const password = this.password;

  const hashedPassword = bcrypt.hashSync(password);

  this.password = hashedPassword;

  next();
});



userSchema.methods.comparePassword = async function(pass,hash){
  const isPasswordValid = await bcrypt.compare(pass,hash);
  return isPasswordValid;
}
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

userSchema.methods.removeCart = async function (productId) {
  const updateCart = this.cart.items.filter((p) => {
    return p.productId.toString() !== productId.toString();
  });

  this.cart = updateCart;
  this.save();
};




const User = mongoose.model("User", userSchema);

module.exports = User;
