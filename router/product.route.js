const router = require("express").Router();

const productController = require("../controller/product.controller");
const isLoggedIn = require("../middleware/isLoggedIn");
const verifyLogin = require("../middleware/verifyLogin");

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
