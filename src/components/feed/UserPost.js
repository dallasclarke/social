import React, { useState } from "react";

import { Container, Row, Col, FormControl, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../../reducers/posts";

function UserPost() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [extension, setExtension] = useState("");

  const dispatch = useDispatch();

  const handlePost = () => {
    dispatch(addPost(text, image, extension));
    setText("");
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    console.log("file ==>", file);
    const reader = new FileReader();
    reader.onload = function (readerEvt) {
      const binaryString = readerEvt.target.result;
      const encoded = btoa(binaryString);
      setImage(encoded);
      setExtension(file.name.split(".")[1]);
    };
    reader.readAsBinaryString(file);
  };
  return (
    <Container className="post d-flex justify-content-center">
      <Row>
        <Col>
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormControl
              className="post-box"
              as="input"
              value={text}
              placeholder="..."
              onChange={(e) => setText(e.target.value)}
            />
            <input
              type="file"
              name="fileToUpload"
              onChange={handleFileChange}
            />           
            <button onClick={handlePost}>Post</button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UserPost;
