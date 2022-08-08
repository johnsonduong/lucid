import { React, useEffect, useState, useContext } from "react";

import { Container, Button, Card, Navbar, Nav } from "react-bootstrap";
import { Context } from "../context/Context";

function CustomNavbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Navbar variant="light" className="mb-5">
      <Container>
        <Navbar.Brand href="/">lucid</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login" onClick={handleLogout}>
            {user && "Logout"}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
