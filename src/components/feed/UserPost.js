import React from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

function UserPost() {
  return (
    <div className="post">
      <Container className="container">
        {/* <Row className="input-area">
          <Col md={{ offset: 1 }}>
            <img
              src="https://www.tvovermind.com/wp-content/uploads/2018/07/Ric-Flair.jpg"
              alt="avatar"
              id="user"
            />
            <input type="text" placeholder="Write Something..." />
          </Col>
          <Col className="d-flex align-items-center">
            <Button>Post</Button>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <img
              id="user-avatar"
              src="https://www.tvovermind.com/wp-content/uploads/2018/07/Ric-Flair.jpg"
            />
          </Col>
          <Col>
            <FormControl />
          </Col>
        </Row>
        <Row>
          <button>Post</button>
        </Row>
      </Container>
    </div>
  );
}

export default UserPost;
