import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { deletePost, getPosts } from "../../reducers/posts";

import { Container, Col, Row } from "react-bootstrap";

function Postings(props) {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  // console.log(posts, "<= posts");

  return (
    <div className="feed-posts">
      <Container>
        <Col>
          {posts.posts &&
            posts.posts.map((post) => {
              return (
                <div className="post-box" key={post._id}>
                  <Container>
                    {/* <Col md={{ offset: 11, span: 1 }}>
                    <button
                      id="post-btn"
                      onClick={() => handleDelete(post._id)}
                    >
                      X
                    </button>
                  </Col>                  
                    <img src={post.user.avatar} id="post-avatar" />
                    <h4>{post.user.name}</h4>
                    <h4>{moment(post.date).format("MMM D YYYY")}</h4>                  
                  <p>{post.text}</p> */}
                    <Row>
                      <Col className="d-flex" md={{ span: 12 }}>
                        <img src={post.user.avatar} id="post-avatar" />
                        <Col md={{ span: 3 }}>
                          <h4>{post.user.name}</h4>
                          <h4>{moment(post.date).format("MMM D YYYY")}</h4>
                        </Col>
                        <Col md={{ offset: 7, span: 1 }}>
                          <button
                            id="post-btn"
                            onClick={() => handleDelete(post._id)}
                          >
                            X
                          </button>
                        </Col>
                      </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                      <p>{post.text}</p>
                    </Row>
                  </Container>
                </div>
              );
            })}
        </Col>
      </Container>
    </div>
  );
}

export default Postings;
