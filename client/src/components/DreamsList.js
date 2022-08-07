import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  const editDream = (id) => {
    // axios.delete("/posts/" + id).then((response) => {
    //   console.log(response.data);
    // });
    // setDreams(dreams.filter((dream) => dream._id !== id));
  };

  const deleteDream = (id) => {
    axios.delete("/posts/" + id).then((response) => {
      console.log(response.data);
    });

    setDreams(dreams.filter((dream) => dream._id !== id));
  };

  return (
    <div>
      {dreams.map((dream) => (
        <DreamCard title={dream.title} description={dream.description} date={dream.date} editDream={editDream} deleteDream={deleteDream} id={dream._id} />
      ))}
    </div>
  );
}

function DreamCard(props) {
  return (
    <Card border="dark" className="my-3">
      <Card.Header className="d-flex justify-content-between">
        {props.date}
        <div>
          <Link to={"/edit/" + props.id}>
            <Button className="m-1" onClick={() => props.editDream(props.id)}>
              Edit
            </Button>
          </Link>
          <Button className="m-1" onClick={() => props.deleteDream(props.id)}>
            Delete
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DreamsList;
