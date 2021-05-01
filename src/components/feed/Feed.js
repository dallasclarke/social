import React from "react";

import UserPost from "./UserPost";
import Postings from "./Postings";

import { Container, Row, Col } from "react-bootstrap";

function Feed() {
  return (
    <Container className="d-flex flex-column">
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
