import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { FaLongArrowAltLeft } from "react-icons/fa";

function InfoBar() {
  return (
    <div className="info-bar d-flex align-items-center">
      <Container className="d-flex">
        <Row className="d-flex align-items-center">
          <Col md={{ span: 3 }}>
            <FaLongArrowAltLeft id="arrow" size={40} />           
          </Col>
          <Col md={{span: 6}}>
            <h4>Dallas Clarke</h4>
          </Col>
        </Row>
        <Row className="d-flex align-items-center" md={{span: 5}}>
          <Col>
            <h4>User posts</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default InfoBar;
