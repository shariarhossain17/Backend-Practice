const router = require("express").Router();

const productController = require("../controller/product.controller");

router.route("/products").get(productController.fetchProducts);

module.exports = router;
