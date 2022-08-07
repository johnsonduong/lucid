import React, { useState, useEffect } from "react";
import { Container, Button, Card, Navbar, Nav } from "react-bootstrap";
import axios from "axios";

function DreamsList() {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    axios
      .get("/posts")
      .then((response) => {
        setDreams(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {dreams.map((dream) => (
        <DreamCard title={dream.title} description={dream.description} date={dream.date} />
      ))}
    </div>
  );
}

function DreamCard(props) {
  return (
    <Card border="dark" className="my-3">
      <Card.Header>{props.date}</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DreamsList;
