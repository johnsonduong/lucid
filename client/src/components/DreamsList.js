import React, { useState } from "react";

import { Container, Button, Card, Navbar, Nav } from "react-bootstrap";

function DreamsList() {
  return (
    <Container>
      <Button>New Entry</Button>
      {/* {typeof backendData.posts === "undefined" ? <p>Loading...</p> : backendData.posts.map((dream) => <DreamCard title={dream.title} date={dream.date} description={dream.description} />)} */}
    </Container>
  );
}

function DreamCard(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());

  return (
    <Card border="dark" className="my-3">
      <Card.Header>{props.date}</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DreamsList;
