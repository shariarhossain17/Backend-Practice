const router = require("express").Router();
const userController = require("../controller/userController");
const { userValidator } = require("../utils/validator/userValidator");

router.post('/signup',userValidator(),userController.createUser)
router.post('/login',userController.logInUser)




module.exports = router;