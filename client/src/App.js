import "bootstrap/dist/css/bootstrap.min.css";
import { React, useEffect, useState, useContext } from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import { Container, Button, Card, Navbar, Nav } from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";
import { Context } from "./context/Context";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

function App() {
  const { user } = useContext(Context);

  return (
    <div>
      {user && <CustomNavbar />}
      <div className="container">
        <br />
        <Routes>
          <Route path="/" exact element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
