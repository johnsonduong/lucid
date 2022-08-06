import { React, useEffect, useState } from "react";
import { Container, Button, Card, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      <CustomNavbar />
      <Container>
        <Button>New Entry</Button>
        {typeof backendData.posts === "undefined" ? <p>Loading...</p> : backendData.posts.map((dream) => <DreamCard title={dream.title} date={dream.date} body={dream.body} />)}
      </Container>
    </div>
  );
}

function DreamCard(props) {
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

function CustomNavbar() {
  return (
    <Navbar bg="light" variant="light" className="mb-5">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default App;
