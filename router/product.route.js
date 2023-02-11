const router = require("express").Router();

const productController = require("../controller/product.controller");
const authenticate = require("../middleware/authenticate");
const isAuth = require("../middleware/isAuth");


router
  .route("/products")
  .post(productController.postProduct)
  .get(isAuth,productController.fetchAllProduct);

router
  .route("/products/:id")
  .get(productController.fetchProductById)
  .patch(productController.updatedProduct)
  .delete(productController.deleteProduct)

module.exports = router;
