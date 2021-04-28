import React, { useState } from "react";
import moment from 'moment'

import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaCalendar, FaCheck } from "react-icons/fa"
import ProfileModal from "../modal/ProfileModal";

function UserInfo(props) {
  const [showModal, setShowModal] = useState(false);
 
  return (
    <div className="user-info">
      <Container className="info-container">
        <Row>
          <Col>
            <img
              src="https://www.tvovermind.com/wp-content/uploads/2018/07/Ric-Flair.jpg"
              alt="profile-pic"
              id="profile-pic"
            />
            <h1>{props.profile.name}</h1>
          </Col>
          <Col>
            <button id="edit-profile-btn" onClick={() => setShowModal(!showModal)}>Edit Profile</button>
          </Col>
        </Row>
        <Row>
          <h3>Bio:</h3>
          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            ducimus commodi dolor illo natus sequi, nesciunt corporis, culpa
            nemo placeat voluptatem, ad animi illum suscipit! */}
            {props.profile.bio}
          </p>
        </Row>
        <Row>
          <Col>
            <FaMapMarkerAlt color={"#1adcad"} size={20} />
            <h3>{props.profile.city}, {props.profile.state}</h3>
          </Col>
          <Col>
            <FaCheck color={"#1adcad"} size={20} />
            <h3>{moment(props.profile.dateJoined).format("MMM Do YYYY")}</h3>
          </Col>
          <Col>
            <FaCalendar color={"#1adcad"} size={20} />
            <h3>{moment(props.profile.birthday).format("MMM Do YYYY")}</h3>
          </Col>
        </Row>
        <ProfileModal toggle={showModal} setToggle={setShowModal} />
      </Container>
    </div>
  );
}

export default UserInfo;
