import { React, useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

import { Container, Button, Card, Navbar, Nav } from "react-bootstrap";
import axios from "axios";

import PostCard from "./PostCard";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(Context);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const res = await axios.get("/posts", { params: { username: user.username } });
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/posts/${id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="mb-5 display-6">
        Good to see you again, <span style={{ fontWeight: "bold" }}>{user.username}</span>
      </h1>
      <Link to={"/create"}>
        <Button className="my-1">New Entry</Button>
      </Link>
      {posts.reverse().map((post) => (
        <PostCard title={post.title} description={post.description} date={post.date} deletePost={handleDelete} id={post._id} />
      ))}
    </div>
  );
}

export default PostsList;
