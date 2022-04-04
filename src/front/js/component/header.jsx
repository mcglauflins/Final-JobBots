import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import robotLogo from "/workspace/Final-JobBots/src/front/img/Robot.png";
import welcomes from "/workspace/Final-JobBots/src/front/img/bot-dialogue.png";

export const Header = () => {
  const styles = {
    backgroundImage: `url(${robotLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
    minHeight: "69vh"
  };
  return (
    <Container style={styles}>
      <Row className="row flex flex-row justify-content-center">
        <Col className="welcome col-sm-4">
          <img src={welcomes}></img>
        </Col>
      </Row>
      <Row>
        <Col></Col>
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
