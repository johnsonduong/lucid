import React from "react";
import { Container, Button, Card, Navbar, Nav } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar variant="light" className="mb-5">
      <Container>
        <Navbar.Brand href="/">lucid</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
