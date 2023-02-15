const verifyToken = require("../middleware/verifyToken");
const User = require("../models/user.model");
const { createPostService, getPostServiceById } = require("../services/post.services");
const {
  findUserByEmailService,
  createUserService,
} = require("../services/user.services");
const { generateToken } = require("../utils/generateToken");

module.exports = {
  createUser: async function ({ userInput }, req, res, next) {
    try {
      const existUser = await findUserByEmailService(email);
      if (existUser) {
        return res.status(400).json({
          status: false,
          message: "email already exist",
        });
      }

      const user = await createUserService(userInput);
      return { _id: user._id, email: user.email };
    } catch (error) {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
    }
    next(error);
  },

  logIn: async function ({ email, password }) {
    console.log(email);

    const user = await User.findOne({ email });

    // if (!user) {
    //   return res.status(401).json({
    //     status: false,
    //     message: "can't find data",
    //   });
    // }

    const isPasswordValid = await user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        status: false,
        message: "can't find data",
      });
    }
    const token = generateToken(user);

    return { token: token, user: user._id };
  },

  createPost: async function ({ postInput },context, req) {
    const token = req?.headers?.authorization;

    console.log(token);

    
    const post = await createPostService(postInput);
    const { _id, title, content, author, updateAt, createAt } = post;
    return {
      _id: _id,
      title: title,
      content: content,
      author: author,
      updateAt: updateAt,
      createAt: createAt,
    };
  },

  post:async function ({id},req){
    const post = await getPostServiceById(id)
    const {title,content} = post
    return {title,content}
  }
};
