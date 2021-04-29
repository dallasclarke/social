import React, { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";

import { Container, Row, Col, FormControl, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../reducers/posts";

function UserPost() {
  const [text, setText] = useState("");

  const user = useSelector(state => state.profile)
  const dispatch = useDispatch();

  const handlePost = () => {
    dispatch(addPost(text));
    console.log(text);
  };
  return (
    <div className="post">
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <img
              src={user.profile.avatar}
              id="user-avatar"
              alt="User-Avatar"
            />
            <Form onSubmit={(e) => e.preventDefault()}>
              <FormControl
                id="post-box"
                as="input"
                placeholder="Write Something..."
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={handlePost}>Post</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserPost;
