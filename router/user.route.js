const router = require("express").Router();
const userController = require("../controller/user.controller")



router.route('/user').post(userController.createUser)

module.exports = router