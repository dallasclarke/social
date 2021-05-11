import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { deletePost, getPosts } from "../../reducers/posts";
import { Link } from "react-router-dom";

import { Col, Row, Dropdown, Card } from "react-bootstrap";

function Postings(props) {
  const posts = useSelector((state) => state.posts.data);
  const dispatch = useDispatch();

  const userId = localStorage.getItem("userId");

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
          <Card key={post._id} className="post-card">
            <Card.Header>
              <Row>
                <Col md={{ span: 1 }}>
                  <img src={post.user.avatar} className="post-avatar" />
                </Col>
                <Col md={{ span: 2 }}>
                  <Link to={`/${post._id}`}>
                    <h4>{post.user.name}</h4>
                  </Link>
                  <Row>
                    <Col>
                      <h4>{moment(post.date).format("LLL")}</h4>
                    </Col>
                  </Row>
                </Col>
                {userId === post.user._id && (
                  <Col md={{ offset: 8 }}>
                    <Dropdown>
                      <Dropdown.Toggle />
                      <Dropdown.Menu>
                        <Dropdown.Item>Edit</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDelete(post._id)}>
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                )}
              </Row>
            </Card.Header>
            <Card.Body className="card-body">
              <Card.Text>{post.text}</Card.Text>
              {post.image && (
                <img src={`/content/${post.image}`} className="post-image" />
              )}
            </Card.Body>
          </Card>
        );
      })}
    </>
  ) : null;
}

export default Postings;
