import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import InfoBar from "./InfoBar";
import UserInfo from "./UserInfo";
import Postings from "../feed/Postings";
import { getCurrentProfile } from "../../reducers/profile";

function UserProfile() {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  // console.log(profile.profile.name, "<===profile");

  return (
    <div className="user-profile">
      <Container className="profile-container d-flex justify-content-center">
        <Row>
          <Col>
            <InfoBar profile={profile.profile} />
            <Row>
              <Col>
                <UserInfo profile={profile.profile} />
              </Col>
            </Row>
            <Row>
              <Col>{/* <Postings /> */}</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
