import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import InfoBar from "./InfoBar";
import UserInfo from "./UserInfo";
import ProfilePosts from "./ProfilePosts";

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
    <Container>
      <Row>
        <Col>
          <InfoBar {...profile} />
        </Col>
      </Row>
      <Row>
        <Col>
          <UserInfo {...profile} />
        </Col>
      </Row>
      <Row>
        <Col>
          {userPosts.map((post) => (
            <div key={post._id} className="profile-posts">
              <ProfilePosts {...post} />
            </div>
          ))}
          <ProfilePosts />
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
