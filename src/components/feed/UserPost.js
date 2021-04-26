import React, { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";

import { Container, Row, Col, FormControl, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../../reducers/posts";




function UserPost() {

  const dispatch = useDispatch();

  const [text, setText] = useState('')

  const  handlePost = () => {
    dispatch(addPost(text))
   console.log(text)
  }
  return (
    <div className="post">
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <img
              src="https://www.tvovermind.com/wp-content/uploads/2018/07/Ric-Flair.jpg"
              id="user-avatar"
              alt="User-Avatar"
            />
            <Form
      
              onSubmit={(e) => e.preventDefault()}
            >
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
