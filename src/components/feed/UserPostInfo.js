import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../reducers/posts";

import { Row, Col } from "react-bootstrap";

import InfoBar from "../profile/InfoBar";
import UserInfo from "../profile/UserInfo";

// const userId = localStorage.getItem("userId");

const Post = (props) => {
  const post = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPost(props.match.params.id));
  }, []);

  if (post) {
    return (
      <div key={post.user._id}>
        <Row>
          <Col md={{ offset: 3 }}>
            <InfoBar />
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 3 }}>
            <UserInfo {...post.user} post={post} />
          </Col>
        </Row>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default Post;
