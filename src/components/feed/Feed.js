import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import AppNav from "../nav/Nav";
import UserPost from "./UserPost";
import Postings from "./Postings";

import { Container, Row, Col } from "react-bootstrap";

function Feed() {
  const { posts } = useSelector((state) => state.posts)

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
