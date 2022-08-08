import { React, useEffect, useState, useContext } from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import { Container, Button, Card, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import DreamsList from "./components/DreamsList";
import EditDream from "./components/EditDream";
import CreateDream from "./components/CreateDream";
import Login from "./components/Login";
import Register from "./components/Register";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  // const user = false;
  return (
    <div className="container">
      <CustomNavbar />
      <br />
      <Routes>
        <Route path="/" exact element={user ? <DreamsList /> : <Login />} />
        <Route path="/register" element={user ? <DreamsList /> : <Register />} />
        <Route path="/login" element={user ? <DreamsList /> : <Login />} />
        <Route path="/create" element={<CreateDream />} />
        <Route path="/edit/:id" element={<EditDream />} />
      </Routes>
    </div>
  );
}

export default App;
