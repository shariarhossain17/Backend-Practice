const {
  fetchProductServices,
  postProductService,
  fetchProductServicesById,
  updateProductByIdService,
  deleteProductById,
} = require("../services/product.services");

module.exports.fetchProducts = async (req, res) => {
  try {
    const product = await fetchProductServices();
    if (product.length === 0) {
      res.status(400).json({
        status: false,
        message: "can't find data",
      });
    }
    res.status(200).json({
      status: true,
      message: "data get success",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't get products data",
      error: error,
    });
  }
};

module.exports.postProduct = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postProductService(data);
    res.status(200).json({
      status: true,
      message: "post success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't create data",
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
      data: result[0],
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't create data",
      error: error,
    });
  }
};

module.exports.updatedProduct = async (req, res, next) => {
  try {
    const result = await updateProductByIdService(req.params.id, req.body);

    res.status(200).json({
      status: true,
      message: "product updated success",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't updated data",
    });
  }
};


module.exports.deletedProduct = async (req,res,next) => {
  try {
    const result = await deleteProductById(req.params.id);

    res.status(200).json({
      status:true,
      message:"product deleted success",
      data:result
    })
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't deleted data",
    });
  }
}
