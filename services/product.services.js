
const Product = require("../models/product.model");

exports.fetchProductServices = async () => {
  const result = Product.findAll().then((data) => {
    return data;
  });

  return result;
};

exports.postProductService = async (data,user) => {
  const { title, price, description } = data;
  const result = await Product.create({
    title: title,
    price: price,
    description: description,
    userId:user.id
  });

  return result;
};

exports.fetchProductServicesById = async (productId) => {
  const result = Product.findAll({ where: { id: productId } }).then(
    (product) => {
      return product;
    }
  );
  return result;
};

exports.updateProductByIdService = async (id, product) => {
  const { title, price, description } = product;

  const result = Product.findByPk(id)
    .then((product) => {
      (product.title = title),
        (product.price = price),
        (product.description = description);
      return product.save();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });

  return result;
};

exports.deleteProductById = async (id) => {
  const result = await Product.findByPk(id)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
