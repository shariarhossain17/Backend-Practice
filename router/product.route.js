const router = require("express").Router();

const productController = require("../controller/product.controller");

router
  .route("/products")
  .get(productController.fetchProducts)
  .post(productController.postProduct);

router
  .route("/products/:id")
  .get(productController.fetchProductById)
  .patch(productController.updatedProduct);

module.exports = router;
