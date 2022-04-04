import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import robotLogo from "/workspace/Final-JobBots/src/front/img/Robot.png";
import welcomes from "/workspace/Final-JobBots/src/front/img/bot-dialogue.png";

export const Header = () => {
  return (
    <Container className="container">
      <Row>
        <Col></Col>
        <Col className="welcome">
          <img src={welcomes}></img>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col className="robot">
          <img src={robotLogo}></img>
        </Col>
        <Col className="colHead">
          <h3 className="header1">Job Applications</h3>
        </Col>
      </Row>
      <Row className="rowHead">
        <Col></Col>
        <Col className="colHead1">
          <h1 className="header2">Simplified</h1>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col className="colHead">
          <button className="btn1">Start Here!</button>
        </Col>
      </Row>
    </Container>
  );
};
