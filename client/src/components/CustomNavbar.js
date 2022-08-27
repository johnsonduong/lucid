import { React, useEffect, useState, useContext } from "react";

import { Container, Button, Card, Navbar, Nav, Col } from "react-bootstrap";
import { Context } from "../context/Context";

function CustomNavbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Navbar className="mb-5 pt-3 ">
      <Container className="d-flex justify-content-between px-0">
        <div>
          <Navbar.Brand href="/">Lucid</Navbar.Brand>
        </div>
        <div>
          <Nav defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link href="/">
                <Button variant="outline-dark" style={{ border: "none" }}>
                  Home
                </Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login" onClick={handleLogout}>
                <Button variant="outline-secondary" style={{ border: "none" }}>
                  Logout
                </Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
