import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import InfoBar from "./InfoBar";
import UserInfo from "./UserInfo";
import { getCurrentProfile } from "../../reducers/profile";
import { getPosts } from "../../reducers/posts";

const userId = localStorage.getItem("userId");

function UserProfile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const posts = useSelector((state) => state.posts.data);
  const userPosts = posts.filter((post) => post.user._id === userId);

  useEffect(() => {
    dispatch(getCurrentProfile());
    dispatch(getPosts());
  }, []);

  return (
    <div className="user-profile">
      <Container className="profile-container d-flex justify-content-center">
        <Row>
          <Col>
            <InfoBar profile={profile.profile} />
            <Row>
              <Col>
                <UserInfo {...profile} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <h2>Posts by user</h2>
      {userPosts.map((post) => (
        <div>
          <p>text: {post.text}</p>
        </div>
      ))}
    </div>
  );
}

export default UserProfile;
