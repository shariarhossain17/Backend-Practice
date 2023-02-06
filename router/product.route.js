const router = require("express").Router();

const productController = require("../controller/product.controller");

router
  .route("/products")
  .post(productController.postProduct)
  .get(productController.fetchAllProduct);

router
  .route("/products/:id")
  .get(productController.fetchProductById)
  .patch(productController.updatedProduct)
  .delete(productController.deleteProduct)

module.exports = router;
