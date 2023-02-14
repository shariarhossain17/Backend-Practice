const router = require("express").Router();
const postController = require("../controller/post.controller");
const authorization = require("../middleware/authorization");
const verifyToken = require("../middleware/verifyToken");
const { postValidate } = require("../utils/validator/postValidator");

router.post("/create",postValidate(), postController.createPost);
router.get("/get", verifyToken,authorization("user"),postController.getPost);

router
  .route("/:id")
  .get(postController.getPostById)
  .patch(postController.updatePostById)
  .delete(postController.deletePostById)

module.exports = router;
