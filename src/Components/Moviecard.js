import React, {useState} from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function Moviecard({ movie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl}></Card.Img>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Link to="/Description">Description</Link>
          <Button variant="primary" onClick={handleShow}>
          <a href={movie.trailer} target = {'_blank'}>Trailer</a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Moviecard;
