import { React, useEffect, useState, useContext } from "react";

import { Container, Button, Card, Navbar, Nav, Col } from "react-bootstrap";
import { Context } from "../context/Context";

import DarkTheme from "react-dark-theme";

function CustomNavbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const lightTheme = {
    background: "white",
    text: "black",
  };

  const darkTheme = {
    background: "black",
    text: "white",
  };

  return (
    <Navbar className="mb-5 pt-3 ">
      <Container className="d-flex justify-content-between px-0">
        <div>
          <Navbar.Brand href="/">
            <span style={{ fontWeight: "bold" }}>Lucid</span>
          </Navbar.Brand>
        </div>
        <div>
          <Nav defaultActiveKey="/">
            {/* <Nav.Item>
              <DarkTheme light={lightTheme} dark={darkTheme} />
            </Nav.Item> */}
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
