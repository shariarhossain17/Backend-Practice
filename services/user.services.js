const User = require("../models/user.model");
const { sendMail } = require("../utils/sendMail");

exports.createUserService = async (userData) => {
  const user = await User.create(userData);
  await sendMail();
  return user;
};

exports.getUserServiceByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

exports.getCartService = async (id) => {
  const result = await User.findById(id).populate("cart.items.productId");
  return result;
};

exports.resetService = async (email, token) => {

    console.log(email)
    const result = await User.updateOne({email:email},token);
    return result;
};
