import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import InfoBar from "./InfoBar";
import UserInfo from "./UserInfo";
import Postings from "../feed/Postings";

function UserProfile() {
  return (
    <div className="user-profile">
      <Container className="profile-container d-flex justify-content-center">
        <Row>
          <Col>
            <InfoBar />
            <Row>
              <Col>
                <UserInfo />
              </Col>
            </Row>
            <Row>
              <Col>
                <Postings />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserProfile;
