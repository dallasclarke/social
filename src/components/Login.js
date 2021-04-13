import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import RegisterCard from "./RegisterCard";

function Login() {
  return (
    <div>
      <Container className="login-container">
        <Form className="form">
          <Row>
            <Col md={{ span: 3, offset: 3 }}>
              <Form.Control placeholder="Email" id="inputs" />
            </Col>
            <Col md={3}>
              <Form.Control type="password" placeholder="Password" id="inputs" />
            </Col>
            <Col md={3}>
              <Button id="login-button">Login</Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <RegisterCard />
    </div>
  );
}

export default Login;
