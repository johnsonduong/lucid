import { React, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
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
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" ref={userRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" ref={passwordRef} />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isFetching}>
          Login
        </Button>
        <Link className="link" to="/register">
          Register
        </Link>
      </Form>
    </div>
  );
}

export default Login;
