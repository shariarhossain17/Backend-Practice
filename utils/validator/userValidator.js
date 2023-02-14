const { body } = require("express-validator");

const User = require("../../models/user.model");

exports.userValidator = () => {
  return [
    body("name").notEmpty().withMessage("name required").trim(),
    body("email")
      .notEmpty()
      .withMessage("email required")
      .isEmail()
      .withMessage("provide valid email")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("email already exist");
          }
        });
      })
      .normalizeEmail(),
    body("password").notEmpty().withMessage("password required"),
  ];
};
