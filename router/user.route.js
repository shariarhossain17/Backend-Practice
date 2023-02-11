const router = require("express").Router();
const userController = require("../controller/user.controller");

router
  .route("/cart")
  .post(userController.postCart)
  .get(userController.getCart)
  .delete(userController.removeCart);
router.route("/signUp").post(userController.createUser);
router.route("/signIn").post(userController.signIn);

module.exports = router;
