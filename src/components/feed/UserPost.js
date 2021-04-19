import React from "react";
import { RiImageAddFill } from "react-icons/ri";

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
      {/* <Container className="container">
        <Row>
          <Col md={{ span: 8, offset: 1 }} className="user-input d-flex">
            <img
              id="user-avatar"
              src="https://www.tvovermind.com/wp-content/uploads/2018/07/Ric-Flair.jpg"
            />
            <FormControl placeholder="Write Something..." />
          </Col>
        </Row>
        <Row>
          <Col xs={{span: 3, offset:3}} md={{span: 1, offset: 2}}>
            <button>
              <RiImageAddFill style={{ color: "white" }} size={25} />
            </button>
          </Col>
          <Col xs={{span: 2, offset: 2}} md={{ span: 1, offset: 7 }}>
            <button id="post-button">Post</button>
          </Col>
        </Row>
      </Container> */}
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <img
              src="https://www.tvovermind.com/wp-content/uploads/2018/07/Ric-Flair.jpg"
              id="user-avatar"
            />

            <FormControl id="post-box" as="input" placeholder="Write Something..." />
            <button>Post</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserPost;
