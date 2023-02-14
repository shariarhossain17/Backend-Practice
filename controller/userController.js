const {
  createUserService,
  findUserByEmailService,
} = require("../services/user.services");
const { validationResult } = require("express-validator");
const { generateToken } = require("../utils/generateToken");

module.exports.createUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // const error = new Error("validation failed");
      // error.statusCode = 422;
      // error.data = errors.array();

      // throw error;

      return res.status(422).json({
        status: false,
        message: "validation failed ,eneterd data is incorrect",
        error: errors.array(),
      });
    }
    const user = await createUserService(req.body);

    res.status(201).json({
      status: true,
      message: "user create success",
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

module.exports.logInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("please provide credential");
      error.statusCode = 400;
      throw error;
    }

    const user = await findUserByEmailService(email);

    if (!user) {
      const error = new Error("A user in this mail could not be find ");
      error.statusCode = 401;
      throw error;
    }

    const isPasswordValid = await user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      const error = new Error("password wrong");
      error.statusCode = 403;
      throw error;
    }

    const token = await generateToken(user);

    const {password:pwd,...others} = user.toObject()

    res.status(200).json({
      status: true,
      message: "login success",
      data: {
        user: others,
        token: token,
      },
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
