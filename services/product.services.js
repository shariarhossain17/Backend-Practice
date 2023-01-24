const Product = require("../db/db");

exports.fetchProductServices = async () => {
  const result = Product.fetchAll();
  return result;
};

exports.postProductService = async (data) => {
  const product = new Product(null, data.title, data.price, data.description);
  product
    .save()
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};

exports.fetchProductServicesById = async (id) => {
  const result = Product.fetchById(id);
  return result;
};
