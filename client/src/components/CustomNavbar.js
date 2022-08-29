import { React, useEffect, useState, useContext } from "react";

import { Container, Button, Card, Navbar, Nav, Col } from "react-bootstrap";
import { Context } from "../context/Context";

function CustomNavbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Navbar className="mb-5 py-3" style={{ boxShadow: "0px 1px 1px lightgray" }}>
      <Container className="d-flex justify-content-between">
        <div>
          <Navbar.Brand href="/">
            <span style={{ fontWeight: "bold" }}>Lucid</span>
          </Navbar.Brand>
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
            {/* <Nav.Item>
              <Nav.Link href="/settings">
                <Button variant="outline-dark" style={{ border: "none" }}>
                  Settings
                </Button>
              </Nav.Link>
            </Nav.Item> */}
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
