const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    username: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
