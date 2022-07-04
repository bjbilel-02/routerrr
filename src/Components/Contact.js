import React, { useState } from "react";

import { Form, FormLabel, Modal, Button } from "react-bootstrap";

function Foottt() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Contact Me
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormLabel>Name : </FormLabel>
          <Form.Control type="text" />
          <FormLabel>Last Name</FormLabel>
          <Form.Control type="text" />
          <FormLabel>Entrer Your Mail</FormLabel>
          <Form.Control type="mail" />
          <FormLabel>Note</FormLabel>
          <Form.Control type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
}

export default Foottt;
