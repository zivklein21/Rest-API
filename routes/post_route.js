const express = require("express");
const router = express.Router();
const postsController = require("../controllers/post_controller");

router.post("/newPost", postsController.createPost);

router.get("/allPosts", postsController.getAllPosts);

router.get("/post/:id", postsController.getPostById);

router.put("/post/:id", postsController.updatePostContent);


module.exports = router;