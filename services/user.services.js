const User = require("../models/user.model");

exports.createUserServices = async (data) => {
  const { name, email, role } = data;

  const result = await User.create({
    name: name,
    email: email,
  });

  return result;
};
