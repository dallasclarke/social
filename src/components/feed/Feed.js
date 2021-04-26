import React, { useEffect } from "react";

import AppNav from "../nav/Nav";
import UserPost from "./UserPost";
import Postings from "./Postings";

import { Container, Row, Col } from "react-bootstrap";

function Feed() {
  return (
    <div className="feed">
      <AppNav />
      <Container className="d-flex justify-content-center">
        <Row>
          <Col md={{offset:1}}>
            <UserPost />
          </Col>
          <Col>
            <Postings />
          </Col>
        </Row>       
      </Container>
    </div>
  );
}

export default Feed;
