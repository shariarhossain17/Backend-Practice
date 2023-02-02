const Product = require("../models/product.model");

exports.fetchProductServices = async () => {
  const result = Product.fetchAll();
  return result;
};

exports.postProductService = async (data) => {

  console.log(data);

  const {title,price,description} = data;
  const result = await Product.create({
    title:title,
    price:price,
    description:description
  })

  return result;
};

exports.fetchProductServicesById = async (id) => {
  const result = Product.fetchById(id);
  return result;
};
