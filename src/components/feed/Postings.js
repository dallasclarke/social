import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deletePost, getPosts } from "../../reducers/posts";

import { Container, Col } from "react-bootstrap";

function Postings() {
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  const handleDelete = id => {
     dispatch(deletePost(id));
  }

  console.log(posts, '<=====posts')

  return (
    <div className="feed-posts">
      <Container>
        <Col>
          <h1>ANOTHER</h1>
          <h1>POSTING</h1>
          {posts.posts && posts.posts.map((post) => {
            return (
              <div key={post._id}>
                 <div>{post.text}</div>
                 <button onClick={() => handleDelete(post._id)}>delete</button>
              </div>
             
            )
          })}
        </Col>
      </Container>
    </div>
  );
}

export default Postings;
