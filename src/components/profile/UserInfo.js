import React, { useState } from "react";
import moment from "moment";

import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaCalendar, FaCheck } from "react-icons/fa";
import ProfileModal from "../modal/ProfileModal";

function UserInfo({ name, bio, city, state, birthday, dateJoined, avatar }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="user-info">
      <Container className="info-container">
        <Row>
          <Col>
            <img src={avatar} alt="profile-pic" id="profile-pic" />
            <h1>{name}</h1>
          </Col>
          <Col md={{offset: 7}}>
            <button
              id="edit-profile-btn"
              onClick={() => setShowModal(!showModal)}
            >
              Edit Profile
            </button>
          </Col>
        </Row>
        <Row>
          <Col md={{span: 1}}>
            <h3>Bio:</h3>
          </Col>
          <Col>
            <p className="bio">              
              {bio}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <FaMapMarkerAlt color={"#1adcad"} size={20} />
            <h3>
              {city}, {state}
            </h3>
          </Col>
          <Col>
            <FaCheck color={"#1adcad"} size={20} />
            <h3>{moment(dateJoined).format("MMM Do YYYY")}</h3>
          </Col>
          <Col>
            <FaCalendar color={"#1adcad"} size={20} />
            <h3>{moment(birthday).format("MMM Do YYYY")}</h3>
          </Col>
        </Row>
        {showModal && (
          <ProfileModal
            toggle={showModal}
            setToggle={setShowModal}
            defaultValues={{ bio, state, city }}
          />
        )}
      </Container>
    </div>
  );
}

export default UserInfo;
