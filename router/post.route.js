const router = require("express").Router();
const postController = require("../controller/post.controller");
const { postValidate } = require("../utils/validator/postValidator");

router.post("/create",postValidate(), postController.createPost);
router.get("/get", postController.getPost);

router
  .route("/:id")
  .get(postController.getPostById)
  .patch(postController.updatePostById)
  .delete(postController.deletePostById)

module.exports = router;
