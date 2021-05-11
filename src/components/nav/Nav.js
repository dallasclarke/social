import React from "react";
import { Link } from "react-router-dom";

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
          <Navbar.Brand href="/">
            {/* <img
              src="https://logodix.com/logo/559589.jpg"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> */}
            <h3>Social</h3>
          </Navbar.Brand>
          {/* <Form>
            <FormControl type="text" placeholder="Search for user" />
          </Form> */}
          <Nav>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
            <button onClick={logout}>Logout</button>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}

export default AppNav;
