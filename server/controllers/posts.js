const Post = require("../models/Post");

const getPosts = (req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
};

const createPost = (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newPost = new Post({ title, description, date });

  newPost
    .save()
    .then(() => res.json("Post added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));
};

const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json("Post deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
};

const updatePost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      post.title = req.body.title;
      post.description = req.body.description;
      post.date = Date.parse(req.body.date);

      post
        .save()
        .then(() => res.json("Post updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = { getPosts, createPost, getPost, deletePost, updatePost };
