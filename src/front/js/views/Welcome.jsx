import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import robotLogo from "../../img/Robot.png";
import welcomes from "../../img/bot-dialogue.png";
import "../../styles/welcome.css";

export const Welcome = () => {
  const styles = {
    backgroundImage: `url(${robotLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
    minHeight: "69vh",
  };
  return (
    <Container style={styles}>
      <Row className="row flex flex-row justify-content-center">
        <Col xs={6} md={4} className="welcome col-sm-4">
          <img src={welcomes}></img>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4} className="firstWordTitle">
          <h3>Job Applications</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}></Col>
        <Col className="secondWordTitle">
          <h1>Simplified</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4} className="buttonColumn">
          <button className="btn1">Start Here!</button>
        </Col>
      </Row>
    </Container>
  );
};
