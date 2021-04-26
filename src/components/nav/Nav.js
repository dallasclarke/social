import React from "react";

import { Navbar, Nav, Form, FormControl, Container } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { authLogoutUser } from "../../reducers/auth";

function AppNav() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authLogoutUser());
  };

  return (
    <div className="nav">
      <Container>
        <Navbar className="bar justify-content-between" fixed="top">
          <Navbar.Brand href="#home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Form>
            <FormControl type="text" placeholder="Search for user" />
          </Form>
          <Nav>
            <button>Profile</button>
            <button onClick={logout}>Logout</button>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}

export default AppNav;
