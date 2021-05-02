import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { deletePost, getPosts } from "../../reducers/posts";
import { Link } from "react-router-dom";

import { Container, Col, Row, Dropdown, Card } from "react-bootstrap";


function Postings(props) {
  const posts = useSelector((state) => state.posts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  return posts ? (
    <>
      {posts.map((post) => {
        return (
          <Card key={post._id}>
            <Card.Header className="d-flex align-items-center">
              {post.image ? (
                <img
                  src={`data:image/png;base64,${post.image}`}
                  className="post-avatar"
                />
              ) : (
                <img src={post.user.avatar} className="post-avatar" />
              )}
              <Link to={`/${post._id}`}>
                <h4>{post.user.name}</h4>
              </Link>
              <h4>{moment(post.date).format("MMM D YYYY")}</h4>
              <Dropdown>
                <Dropdown.Toggle />
                <Dropdown.Menu>
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDelete(post._id)}>
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header>
            <Card.Body>
              <Card.Text>{post.text}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  ) : null;

  return (
    <div className="feed-posts">
      {posts.posts &&
        posts.posts.map((post) => {
          return (
            <div className="post-box" key={post._id}>
              <Container>
                <Row>
                  <Col className="d-flex" md={{ span: 12 }}>
                    <img src={post.user.avatar} className="post-avatar" />
                    <Col md={{ span: 3 }}>
                      <h4>{post.user.name}</h4>
                      <h4>{moment(post.date).format("MMM D YYYY")}</h4>
                    </Col>
                    <Col md={{ offset: 7, span: 1 }}>
                      {/* <button
                            id="post-btn"
                            onClick={() => handleDelete(post._id)}
                          >
                            X
                          </button> */}
                      <Dropdown>
                        <Dropdown.Toggle className="dd-toggle" />
                        <Dropdown.Menu>
                          <Dropdown.Item>Edit</Dropdown.Item>
                          <Dropdown.Item onClick={() => handleDelete(post._id)}>
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                  <Col>
                    <p>{post.text}</p>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        })}
    </div>
  );
}

export default Postings;
