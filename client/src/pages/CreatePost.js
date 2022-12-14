import { React, useState, useRef, useContext } from "react";
import { Context } from "../context/Context";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function CreatePost() {
  const { user } = useContext(Context);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/posts/", {
        username: user.username,
        title: title,
        description: description,
        date: date,
      });
      window.location.replace("/");
    } catch (err) {}
  };

  return (
    <div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={15} placeholder="What happened in your dream?" onChange={(e) => setDescription(e.target.value)} required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create Entry
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreatePost;
