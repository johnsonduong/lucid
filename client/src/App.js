import { React, useEffect, useState, useContext } from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import { Container, Button, Card, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import PostsList from "./components/PostsList";
import EditPost from "./components/EditPost";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Register from "./components/Register";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="container">
      <CustomNavbar />
      <br />
      <Routes>
        <Route path="/" exact element={user ? <PostsList /> : <Login />} />
        <Route path="/register" element={user ? <PostsList /> : <Register />} />
        <Route path="/login" element={user ? <PostsList /> : <Login />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
