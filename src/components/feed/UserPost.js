import React, { useState } from "react";
import FileBase64 from 'react-file-base64';

import { Container, Row, Col, FormControl, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../reducers/posts";

function UserPost() {
  const [text, setText] = useState("");
  const [image, setImage] = useState('')

  const user = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handlePost = () => {
    dispatch(addPost(text, image));
    setText("");
  };

  // const getFiles = (files) => {
  //   setImage(files.base64)
  // }

  const handleFileChange = e => {
    const files = e.target.files;
    const file = files[0]
    console.log('file ====', file)
    const reader = new FileReader();
    reader.onload = function (readerEvt) {
      const binaryString = readerEvt.target.result;
      const encoded = btoa(binaryString)
      setImage(encoded)
    }
    reader.readAsBinaryString(file)

  }
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
              placeholder="..."
              onChange={(e) => setText(e.target.value)}
            />
            <input type='file' name='fileToUpload' onChange={handleFileChange} />
            {/* <FileBase64 
            multiple={false}
            onDone={getFiles}
            /> */}
            <button onClick={handlePost}>Post</button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UserPost;
