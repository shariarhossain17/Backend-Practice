const router = require("express").Router();
const userController = require("../controller/user.controller");
const authenticate = require("../middleware/authenticate");
router
  .route("/cart")
  .post(userController.postCart)
  .get(userController.getCart)
  .delete(userController.removeCart);
router.route("/signUp").post(userController.createUser);
router.route("/signIn").post(userController.signIn);
router.route("/reset").post(userController.postReset);

module.exports = router;
