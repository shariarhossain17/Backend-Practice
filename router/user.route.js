const router = require("express").Router();
const userController = require("../controller/user.controller");
const isLoggedIn = require("../middleware/isLoggedIn");

router
  .route("/cart")
  .post(userController.postCart)
  .get(userController.getCart)
  .delete(userController.removeCart);
router.route("/user").post(isLoggedIn,userController.createUser);

module.exports = router;
