import React, { useState } from "react";

import { Container, Row, Col, FormControl, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../reducers/posts";

function UserPost() {
  const [text, setText] = useState("");

  const user = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handlePost = () => {
    dispatch(addPost(text));
    setText("");
  };
  return (
    <Container className="post d-flex justify-content-center">
      <Row>
        <Col>
          <img src={user.avatar} id="user-avatar" alt="User-Avatar" />
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormControl
              className="post-box"
              as="input"
              value={text}
              placeholder="Write Something..."
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handlePost}>Post</button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UserPost;
