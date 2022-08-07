const express = require("express");
const router = express.Router();

const { getPosts, createPost, getPost, deletePost, updatePost } = require("../controllers/posts");

router.get("/", getPosts);

router.post("/add", createPost);

router.get("/:id", getPost);

router.delete("/:id", deletePost);

router.post("/update/:id", updatePost);

module.exports = router;
