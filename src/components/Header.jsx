import {
  faMapLocation,
  faRectangleAd,
  faTriangleCircleSquare,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles/header.css";

function Header() {
  return (
    <>
      <div className="header">
        <h1 className="text">India's</h1> <br />
        <h1 className="text1">Trekking Expert</h1>
      </div>
      <div className="whyUs">
        <div>
          <span className="duo">Why </span>
          <span className="duo1">Us</span>
        </div>

        <div className="cards">
          <Row>
            <Col>
              <FontAwesomeIcon icon={faUserFriends} className="icon" />
              <h4>Experienced Team</h4>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faTriangleCircleSquare} className="icon" />
              <h4>Quality Equipment</h4>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faMapLocation} className="icon" />
              <h4>Planned Itinerary</h4>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faRectangleAd} className="icon" />
              <h4>Affordable Rates</h4>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Header;
