const Product = require("../models/product.model");

exports.fetchProductServices = async () => {
  const result = Product.findAll().then(data => {
   return data
  });

  return result;
};

exports.postProductService = async (data) => {
  const { title, price, description } = data;
  const result = await Product.create({
    title: title,
    price: price,
    description: description,
  });

  return result;
};

exports.fetchProductServicesById = async (id) => {
  const result = Product.fetchById(id);
  return result;
};
