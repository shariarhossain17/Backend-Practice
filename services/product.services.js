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

exports.fetchProductServicesById = async (productId) => {

  const result = Product.findAll({where:{id:productId}}).then((product) => {
    return product;
  });
  return result;
};
