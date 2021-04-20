import React from "react";

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
          <Col>
            <UserPost />
            <Postings />            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Feed;
