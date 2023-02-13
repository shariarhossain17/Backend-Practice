const router = require("express").Router();
const postController = require("../controller/post.controller");

router.post("/create", postController.createPost);
router.get("/get", postController.getPost);

router
  .route("/:id")
  .get(postController.getPostById)
  .patch(postController.updatePostById)
  .delete(postController.deletePostById)

module.exports = router;
