import React from "react";

import { Container, Row, Col, Form } from "react-bootstrap";

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
              <Form.Control type="name" placeholder="Full Name" id="register-inputs" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              controlId="formGridEmail"
              md={{ span: 4, offset: 4 }}
            >
              <Form.Control type="email" placeholder="Enter Email" id="register-inputs" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              controlId="formGridPassword"
              md={{ span: 4, offset: 4 }}
            >
              <Form.Control type="password" placeholder="Password" id="register-inputs" />
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    </div>
  );
}

export default RegisterCard;
