import React from "react";

import { Modal, Col, Row, Form, Button } from "react-bootstrap";

function ProfileModal({ toggle, setToggle }) {
  return (
    <React.Fragment className="modal">
      <Modal size="lg" show={toggle} onHide={() => setToggle(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Bio:</Form.Label>
                <Form.Control className="inputs" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>City:</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>State:</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Row>
          <Col md={{ offset: 5 }}>
            <Button id="modal-btn">Submit</Button>
          </Col>
        </Row>
      </Modal>
    </React.Fragment>
  );
}

export default ProfileModal;
