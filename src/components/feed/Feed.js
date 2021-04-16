import React from "react";

import AppNav from "../nav/Nav";
import UserPost from "./UserPost";

import { Container } from "react-bootstrap";

function Feed() {
  return (
    <div className="feed">
      <AppNav />
      <Container className="d-flex justify-content-center">
        <UserPost />
      </Container>
    </div>
  );
}

export default Feed;
