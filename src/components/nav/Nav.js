import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

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
            <h3>Social</h3>
          </Navbar.Brand>          
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
