import React, { useState } from "react";
import moment from "moment";

import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaCalendar, FaCheck } from "react-icons/fa";
import ProfileModal from "../modal/ProfileModal";
import { useDispatch } from "react-redux";

function UserInfo({
  image,
  name,
  bio,
  city,
  state,
  birthday,
  dateJoined,
  avatar,
  post,
}) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <Container className="user-info info-container">
      <Row className="ml-4 mb-2">
        <Col md={{ span: 1 }}>
          <img src={avatar} alt="user-avatar" className="profile-pic" />
        </Col>
        <Col md={{ offset: 8 }}>
          <button
            className="edit-profile-btn"
            onClick={() => setShowModal(!showModal)}
          >
            Edit Profile
          </button>
        </Col>
      </Row>
      <Row className="text-left">
        <Col xs={{ span: 12 }}>
          <h1>{name}</h1>
        </Col>
      </Row>
      <Row className="text-center ml-1">
        <Col md={{ span: 1 }}>
          <h3>Bio:</h3>
          {/* <p>{bio}</p> */}
        </Col>
      </Row>
      <Row className="ml-3 bio-text">
        <Col md={{ span: 12 }}>
          <p>{bio}</p>
        </Col>
      </Row>
      <Row className="city-dates">
        <Col>
          <FaMapMarkerAlt color={"#1adcad"} size={20} />
        </Col>
        <Col>
          <FaCheck color={"#1adcad"} size={20} />
        </Col>
        <Col>
          <FaCalendar color={"#1adcad"} size={20} />
        </Col>
      </Row>
      <Row className="city-dates">
        <Col>
          <h3>
            {city}, {state}
          </h3>
        </Col>
        <Col>
          <h3>{moment(dateJoined).format("MMM Do YYYY")}</h3>
        </Col>
        <Col>
          <h3>{moment(birthday).format("MMM Do YYYY")}</h3>
        </Col>
      </Row>
      {showModal && (
        <ProfileModal
          toggle={showModal}
          setToggle={setShowModal}
          defaultValues={{ bio, state, city, avatar }}
        />
      )}
    </Container>
  );
}

export default UserInfo;
