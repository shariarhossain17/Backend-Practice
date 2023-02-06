const router = require("express").Router();
const userController = require("../controller/user.controller")


router.post('/cart',userController.postCart);
router.route('/user').post(userController.createUser);

module.exports = router