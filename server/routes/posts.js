const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

const { createPost, updatePost, deletePost, getPost, getAllPosts } = require("../controllers/posts");

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

router.get("/:id", getPost);

router.get("/", getAllPosts);

module.exports = router;
