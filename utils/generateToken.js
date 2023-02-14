const jwt = require("jsonwebtoken");

exports.generateToken = async ({ email, role }) => {
  const payLoad = {
    email: email,
    role: role,
  };

  const token = jwt.sign(payLoad, process.env.TOKEN, {
    expiresIn: "7d",
  });

  return token;
};
