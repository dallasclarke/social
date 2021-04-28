import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../reducers/profile";

import { Modal, Col, Row, Form, Button } from "react-bootstrap";

function ProfileModal({ toggle, setToggle }) {
  const [profileData, setProfileData] = useState({
    bio: "",
    city: "",
    state: "",
  });

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editProfile(profileData))
  }

  return (
    <div className="modal">
      <Modal size="lg" show={toggle} onHide={() => setToggle(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Bio:</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setProfileData((prevState) => ({
                      ...prevState,
                      bio: e.target.value,
                    }))
                  }
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>City:</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setProfileData((prevState) => ({
                      ...prevState,
                      city: e.target.value,
                    }))
                  }
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>State:</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setProfileData((prevState) => ({
                      state: e.target.value,
                    }))
                  }
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Row>
          <Col md={{ offset: 5 }}>
            <Button id="modal-btn" onClick={handleEdit}>Submit</Button>
          </Col>
        </Row>
      </Modal>
      {console.log(profileData)}
    </div>
  );
}

export default ProfileModal;
