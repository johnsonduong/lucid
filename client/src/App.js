import { React, useEffect, useState } from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import { Container, Button, Card, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import DreamsList from "./components/DreamsList";
import EditDream from "./components/EditDream";
import CreateDream from "./components/CreateDream";
import Login from "./components/Login";

function App() {
  return (
    <div className="container">
      <CustomNavbar />
      <br />
      <Routes>
        <Route path="/" exact element={<DreamsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateDream />} />
        <Route path="/edit/:id" element={<EditDream />} />
      </Routes>
    </div>
  );
}

export default App;
