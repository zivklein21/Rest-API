const Posts = require('../models/post_model');

const createPost = async (req, res) => {
    const postBody = req.body;
    try {
      const post = await Posts.create(postBody);
      res.status(201).send(post);
    } catch (error) {
      res.status(400).send(error.message);
    }
};

const getAllPosts = async (req, res) => {
  const filter = req.query.owner;
  try {
    if (filter) {
      const posts = await Posts.find({ owner: filter });
      res.send(posts);
    } else {
      const posts = await Posts.find();
      res.send(posts);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
    createPost,
    getAllPosts
};