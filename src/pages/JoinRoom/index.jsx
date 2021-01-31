import React, { useState } from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.scss";

const JoinRoom = () => {
  const [show, setShow] = useState(false);
  const [roomId, setRoomId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setRoomId(e.target.value);
  };
  const handleJoin = () => {
    console.log(`joining room ${roomId}`);
  };

  return (
    <>
      <Container className="joinRoom">
        <Row className="joinRoom__buttons ">
          <Col md={4}>
            <Button variant="primary" onClick={handleShow}>
              Join Room
            </Button>
          </Col>
          <Col md={4}>
            <Link to="/game">
              <Button variant="secondary">Create Room</Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Join Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Room id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter room id"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Input room id to join.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleJoin}>
            Join Room
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default JoinRoom;
