const {
  createPostService,
  getPostService,
  getPostServiceById,
  updatePostServiceById,
  deletePostServiceById,
} = require("../services/post.services");
const { validationResult } = require("express-validator");

module.exports.createPost = async (req, res, next) => {
  try {
    const error = validationResult(req);
    // if (!error.isEmpty()) {
    //   return res.status(422).json({
    //     status: false,
    //     message: "validation failed ,eneterd data is incorrect",
    //     error:error.array()
    //   });
    // }
    const result = await createPostService(req.body);
    res.status(201).json({
      status: true,
      message: "post create success",
    });
  } catch (error) {
    if(!error.statusCode){
        error.statusCode = 500;
        error.message = "can't create data"
    }
    next(error)
  }
};
module.exports.getPost = async (req, res, next) => {
  try {
    const result = await getPostService();
    res.status(200).json({
      status: true,
      message: "post get success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't create post",
      error: error,
    });
  }
};
module.exports.getPostById = async (req, res, next) => {
  try {
    const result = await getPostServiceById(req.params.id);

    if (!result) {
      res.status(400).json({
        status: false,
        message: "bad request",
        error: error,
      });
    }
    res.status(200).json({
      status: true,
      message: "post get success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't get post",
      error: error,
    });
  }
};
module.exports.updatePostById = async (req, res, next) => {
  try {
    const result = await updatePostServiceById(req.params.id, req.body);

    if (!result.modifiedCount) {
      res.status(400).json({
        status: false,
        message: "bad request",
        error: error,
      });
    }
    res.status(200).json({
      status: true,
      message: "post update success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't update post",
      error: error,
    });
  }
};
module.exports.deletePostById = async (req, res, next) => {
  try {
    const result = await deletePostServiceById(req.params.id);

    if (!result.deletedCount) {
      return res.status(400).json({
        status: false,
        message: "bad request",
        error: error,
      });
    }
    res.status(200).json({
      status: true,
      message: "post  delete success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't delete post",
      error: error,
    });
  }
};
