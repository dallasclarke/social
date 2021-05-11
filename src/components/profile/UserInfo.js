import React, { useEffect, useState } from "react";
import moment from "moment";

import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaCalendar, FaCheck } from "react-icons/fa";
import ProfileModal from "../modal/ProfileModal";
import profile, { editProfile } from "../../reducers/profile";
import { useDispatch } from "react-redux";

function UserInfo({image, name, bio, city, state, birthday, dateJoined, avatar, post}) {
  const [showModal, setShowModal] = useState(false);
  const [profilePic, setProfilePic] = useState('')
   const dispatch = useDispatch();

//    useEffect(() => {
//  dispatch(editProfile(profilePic));
//    }, [profilePic])

//   const handleFileChange = (e) => {
//     const files = e.target.files;
//     const file = files[0];
//     console.log("file ==>", file);
//     const reader = new FileReader();
//     reader.onload = function (readerEvt) {
//       const binaryString = readerEvt.target.result;
//       const encoded = btoa(binaryString);
//       setProfilePic(encoded);
//       dispatch(editProfile(profilePic))
     
//     };
//     reader.readAsBinaryString(file);

//   };

  

  return (
    <div className="user-info">
      <Container className="info-container">
        <Row>
          <Col>
            {/* {profilePic ? (
              <img
                src={`data:image/png;base64,${profilePic}`}
                className="post-image"
                id="profile-pic"
              /> */}
            
              <img src={avatar} alt="profile-pic" id="profile-pic" />
            
            
            <h1>{name}</h1>
          </Col>
          <Col md={{ offset: 7 }}>
            <button
              id="edit-profile-btn"
              onClick={() => setShowModal(!showModal)}
            >
              Edit Profile
            </button>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 1 }}>
            <h3>Bio:</h3>
          </Col>
          <Col>
            <p className="bio">{bio}</p>
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
            defaultValues={{ bio, state, city, avatar }}
          />
        )}
      </Container>
    </div>
  );
}

export default UserInfo;
