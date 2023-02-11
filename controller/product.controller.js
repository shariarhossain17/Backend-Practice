const {
  postProductService,
  fetchProductServices,
  fetchProductServicesById,
  updateProductByIdService,
  deleteProductById,
} = require("../services/product.services");

module.exports.postProduct = async (req, res, next) => {
  try {
    const result = await postProductService(req.body);
    res.status(200).json({
      status: true,
      message: "data create success",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't crete data",
      error: error,
    });
  }
};
module.exports.fetchAllProduct = async (req, res, next) => {
  try {
    const result = await fetchProductServices();
    res.cookie('cookieName', 'cookieValue');
    res.status(200).json({
      status: true,
      message: "data get success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't get data",
      error: error,
    });
  }
};
module.exports.fetchProductById = async (req, res, next) => {
  try {
    const result = await fetchProductServicesById(req.params.id);
    res.status(200).json({
      status: true,
      message: "data get success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't get data",
      error: error,
    });
  }
};
module.exports.updatedProduct = async (req, res, next) => {
  try {
    const result = await updateProductByIdService(req.params.id, req.body);
    res.status(200).json({
      status: true,
      message: "data updated success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't updated data",
      error: error,
    });
  }
};
module.exports.deleteProduct = async (req, res, next) => {
  try {
    const result = await deleteProductById(req.params.id);
    res.status(200).json({
      status: true,
      message: "data deleted success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't deleted data",
      error: error,
    });
  }
};