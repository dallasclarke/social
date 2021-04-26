import React, { useState } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authRegisterUser } from "../../reducers/auth";

function RegisterCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthday: "",
  })

   const dispatch = useDispatch();
  
  const handleChange = e => {
     setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
     dispatch(authRegisterUser(formData));

  }


  return (
    <div className="d-flex align-items-center fullvHeight">
      <Container className="register-container">
        <Row>
          <Col md={{ span: 7, offset: 3 }}>
            <h1 id="header">Not A User? Sign Up Now!</h1>
          </Col>
        </Row>
        <Form className="register-form" onSubmit={(e) => e.preventDefault()}>
          <Form.Row>
            <Form.Group as={Col} md={{ span: 4, offset: 4 }}>
              <Form.Control
                type="name"
                placeholder="Full Name"
                className="register-inputs"
                name='name'
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md={{ span: 4, offset: 4 }}>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                className="register-inputs"
                 name='email'
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md={{ span: 4, offset: 4 }}>
              <Form.Control
                type="password"
                placeholder="Password"
                className="register-inputs"
                 name='password'
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md={{ span: 4, offset: 4 }}>
              <Form.Control
                type="date"
                name="date_of_birth"
                placeholder="Birthday"
                id="date"
                 name='birthday'
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md={{ span: 3, offset: 4 }}>
              <Button id="register-button" onClick={handleSubmit}>Register</Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    </div>
  );
}

export default RegisterCard;
