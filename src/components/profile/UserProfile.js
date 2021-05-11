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
    <div className="user-profile">
      {/* <Container className="profile-container d-flex justify-content-center">
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
      <Row>

      {userPosts.map((post) => (
        <div key={post._id}>
          <p>text: {post.text}</p>
        </div>
      ))}
      </Row> */}
      <Row>
        <Col md={{ offset: 3}}>
          <InfoBar {...profile} />
        </Col>
      </Row>
      <Row>
        <Col md={{offset: 3}}>
          <UserInfo {...profile} />
        </Col>
      </Row>
      <Row>
        <Col md={{ offset: 3 }}>
          {userPosts.map((post) => (
            <div key={post._id}>
             { console.log(post)}
              {/* <p>{post.text}</p> */}
              <ProfilePosts {...post} />
            </div>
          ))}
          <ProfilePosts />
        </Col>
      </Row>
    </div>
  );
}

export default UserProfile;
