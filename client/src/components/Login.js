import { React, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import Button from "react-bootstrap/Button";
import { Container, Card } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

import Form from "react-bootstrap/Form";
import axios from "axios";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const [show, setShow] = useState(false);
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      // res.data && window.location.replace("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setShow(true);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <h1>Lucid</h1>
      <p>A free journal to write down your dreams</p>
      <Card border="light" style={{ padding: 30, marginTop: 20, width: "50%", boxShadow: "0px 0px 5px #999999" }}>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" ref={userRef} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" ref={passwordRef} required />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isFetching} style={{ marginBottom: 10 }}>
            Login
          </Button>
          {show && (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              User does not exist or incorrect entered credentials. Please try again.
            </Alert>
          )}

          <p>
            Don't have an account yet?{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              Sign up
            </Link>
          </p>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
