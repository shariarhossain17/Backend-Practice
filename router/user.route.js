const router = require("express").Router();
const userController = require("../controller/user.controller");

router.route("/cart").post(userController.postCart).get(userController.getCart);
router.route("/user").post(userController.createUser);

module.exports = router;
