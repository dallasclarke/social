import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { authLoginUser } from "../../reducers/auth";
import useCheckAuth from "../../hooks/use-check-auth";

import RegisterCard from "./RegisterCard";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const login = () => {
    dispatch(authLoginUser(email, password));
  };

  const { user, isAuthenticating } = useCheckAuth();

  if (user) {
    return <Redirect to="/" />;
  }

  if (isAuthenticating) {
    return null;
  }

  return (
    <div>
      <Container className="login-container">
        <Form className="form" onSubmit={(event) => event.preventDefault()}>
          <Row>
            <Col md={{ span: 3, offset: 3 }}>
              <Form.Control
                placeholder="Email"
                className="inputs"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Col>
            <Col md={3}>
              <Form.Control
                type="password"
                placeholder="Password"
                className="inputs"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Col>
            <Col md={3}>
              <Button id="login-button" onClick={login}>
                Login
              </Button>
            </Col>
          </Row>
        </Form>
        {error && <div>{error}</div>}
        <Row>
          <Col md={{ offset: 4 }}>
            <h1 id="social">SOCIAL</h1>
          </Col>
        </Row>
      </Container>
      <RegisterCard />
    </div>
  );
}

export default Login;
