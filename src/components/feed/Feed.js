import React from "react";

import AppNav from "../nav/Nav";
import UserPost from "./UserPost";
import Postings from "./Postings";

import { Container, Row, Col } from "react-bootstrap";

function Feed() {
  return (
    <Container className="d-flex flex-column">
      <AppNav />
      <Row>
        <Col>
          <UserPost />
        </Col>
      </Row>
      <Row>
        <Col>
          <Postings />
        </Col>
      </Row>
    </Container>
  );
}

export default Feed;
