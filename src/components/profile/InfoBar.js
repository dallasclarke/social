import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import { FaLongArrowAltLeft } from "react-icons/fa";

function InfoBar(props) {
  return (
    <div className="info-bar d-flex align-items-center">
      <Container className="d-flex">
        <Row className="d-flex align-items-center">
          <Col md={{ span: 3 }}>
            <Link to="/">
              <FaLongArrowAltLeft id="arrow" size={40} />
            </Link>
          </Col>
          <Col md={{ span: 6 }}>
            <h4>{props.profile.name}</h4>
          </Col>
        </Row>
        <Row className="d-flex align-items-center" md={{ span: 5 }}>
          <Col>
            {/* <h4>{props.profile.posts.length} Posts</h4> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default InfoBar;
