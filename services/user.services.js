const User = require("../models/user.model");

exports.createUserService = async (userData) => {
  const user = await User.create(userData);
  return user;
};

exports.findUserByEmailService = async (email) => {

  const user = await User.findOne({ email });
  console.log(user);
  return user;
};
