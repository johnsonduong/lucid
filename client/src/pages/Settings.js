import { React, useState, useRef, useContext } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Context } from "../context/Context";

function Settings() {
  const { dispatch, isFetching } = useContext(Context);
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // dispatch({ type: "LOGIN_START" });
    // try {
    //   const res = await axios.post("/auth/login", {
    //     username: userRef.current.value,
    //     password: passwordRef.current.value,
    //   });
    //   dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    //   // res.data && window.location.replace("/");
    // } catch (err) {
    //   dispatch({ type: "LOGIN_FAILURE" });
    //   setShowError(true);
    // }
  };

  return (
    <div className="container" style={{ margin: "0 6em" }}>
      <h1 className="mb-5 display-6" style={{ fontWeight: "bold" }}>
        Settings
      </h1>
      <h3 className="mb-2">Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" ref={passwordRef} required />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isFetching} style={{ marginBottom: 10 }}>
          Update password
        </Button>
      </Form>
      <h3 className="mb-2">Account</h3>
    </div>
  );
}

export default Settings;
