const Product = require("../models/product.model");

exports.fetchProductServices = async () => {
  const result = await Product.find({}).populate("userId");

  return result;
};

exports.postProductService = async (data) => {

  const result = await Product.create(data);

  return result;
};

exports.fetchProductServicesById = async (productId) => {
  const result = await Product.findById(productId);
  return result;
};

exports.updateProductByIdService = async (id, product) => {
  const result = await Product.updateOne({ _id: id }, product, {
    runValidators: true,
  });
  return result;
};

exports.deleteProductById = async (id) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};
