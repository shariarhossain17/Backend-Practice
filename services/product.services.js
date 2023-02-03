const Product = require("../models/product.model");

exports.fetchProductServices = async () => {
  const result = Product.findAll().then((data) => {
    return data;
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
      console.log(product);
      (product.title = title),
        (product.price = price),
        (product.description = description);
      return product.save();
    })
    .then((result) => {
      // console.log(result);
    })
    .catch((err) => {
      return err;
    });

  return result;
};
