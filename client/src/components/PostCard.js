import { React, useState } from "react";
import { Container, Button, Card, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function PostCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  return (
    <div>
      <Card className="my-3">
        <Card.Header className="d-flex justify-content-between">
          {new Date(props.date).toLocaleDateString("en-US", options)}
          <div>
            <Link to={"/edit/" + props.id}>
              <Button className="m-1" variant="outline-dark" style={{ border: "none" }}>
                Edit
              </Button>
            </Link>
            <Button className="m-1" onClick={handleShow} variant="outline-danger" style={{ border: "none" }}>
              Delete
            </Button>
          </div>
        </Card.Header>
        <Card.Body className="card-description">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ whiteSpace: "pre-wrap" }}>{props.description}</Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body> This action cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => props.deletePost(props.id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PostCard;
