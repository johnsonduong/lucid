import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function CreateDream() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();

    const dream = {
      title: title,
      description: description,
      date: date,
    };

    axios.post("/posts/add", dream).then((res) => console.log(res.data));

    window.location = "/";
  };

  return (
    <div>
      <div>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="What happened in your dream?" onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create Entry
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateDream;
