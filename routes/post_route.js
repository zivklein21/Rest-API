const express = require("express");
const router = express.Router();
const postsController = require("../controllers/post_controller");

router.post("/newPost", postsController.createPost);

router.get("/allPosts", postsController.getAllPosts);

module.exports = router;