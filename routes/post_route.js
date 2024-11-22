const express = require("express");
const router = express.Router();
const postsController = require("../controllers/post_controller");

router.post("/newPost", postsController.createPost);

router.get("/allPosts", postsController.getAllPosts);

router.get("/post?sender=<sender_id>", postsController.getAllPosts);

module.exports = router;