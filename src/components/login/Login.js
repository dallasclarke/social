import React from "react";
import {reduxForm, Field} from "redux-form";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import RegisterCard from "./RegisterCard";

function Login() {
  return (
    <div>
      <Container className="login-container">
        <Form className="form">
          <Row>
            <Col md={{ span: 3, offset: 3 }}>
              <Form.Control placeholder="Email" className="inputs" />
            </Col>
            <Col md={3}>
              <Form.Control type="password" placeholder="Password" className="inputs" />
            </Col>
            <Col md={3}>
              <Button id="login-button">Login</Button>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col md={{offset: 4}}>
            <h1 id="social">SOCIAL</h1>
          </Col>
        </Row>
      </Container>
      <RegisterCard />
    </div>
  );
}

export default Login;
