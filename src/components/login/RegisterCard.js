import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

function RegisterCard() {
  return (
    <div className="d-flex align-items-center fullvHeight">
      <Container className="register-container">
        <Row>
          <Col md={{ span: 7, offset: 3 }}>
            <h1 id="header">Not A User? Sign Up Now!</h1>
          </Col>
        </Row>
        <Form className="register-form">
          <Form.Row>
            <Form.Group as={Col} md={{ span: 4, offset: 4 }}>
              <Form.Control
                type="name"
                placeholder="Full Name"
                className="register-inputs"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md={{ span: 4, offset: 4 }}>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                className="register-inputs"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md={{ span: 4, offset: 4 }}>
              <Form.Control
                type="password"
                placeholder="Password"
                className="register-inputs"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md={{ span: 4, offset: 4 }}>
              <Form.Control type="date" name="date_of_birth" placeholder="Birthday" id="date" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md={{ span:3, offset: 4 }}>
              <Button id="register-button">Register</Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    </div>
  );
}

export default RegisterCard;
