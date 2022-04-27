import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import robotLogo from "../../img/updated.png";
import "../../styles/welcome.css";
import { useState, useRef } from "react";
import Image from 'react-bootstrap/Image'

export const Welcome = () => {
  const [style, setStyle] = useState({
    backgroundImage: `url(${robotLogo})`,
    backgroundRepeat: "repeat",
    backgroundPosition: "16% 100%",
    minHeight: "71vh",
    backgroundSize: "15%",
    opacity: ".2",
  });

  return (
    <Container>
        <Row className="container">
          <Col md={{span:5, offset:3}} sm={{span:9, offset:2}} xs={{span:12, offset:0}} lg={{span:12, offset:3}} className="firstWordTitle">
            <h3>Job Applications...</h3>
          </Col>
          <Image src="../../img/updated.png" />
        </Row>
        <Row>
          <Col md={{span:4, offset:4}} sm={{span:9, offset:2}} xs={{span:12, offset:0}} className="secondWordTitle">
            <h1>Simplified</h1>
          </Col>
        </Row>
        <Row className="rowButton">
          <Col md={{span:4, offset:4}}  xs={{span:10, offset:0}} lg={{span:10, offset:0}} className="buttonColumn d-flex flex-row justify-content-center">
          <button className="btn1">Start Here!</button>
          </Col>
        </Row>
    </Container>
  );
};
