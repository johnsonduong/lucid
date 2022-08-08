import { React, useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function EditDream() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  const id = useRef("");

  useEffect(() => {
    const url = window.location.href;

    const strs = url.split("/");
    id.current = strs.at(-1);

    axios
      .get("/posts/" + id.current)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDate(new Date(response.data.date));
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const dream = {
      title: title,
      description: description,
      date: date,
    };

    axios.post("/posts/update/" + id.current, dream).then((res) => console.log(res.data));

    window.location = "/";
  };

  return (
    <div>
      <div>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={10} placeholder="What happened in your dream?" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Edit Entry
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EditDream;
