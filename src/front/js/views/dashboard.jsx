import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Dashboard = () => {
  return (
    <Container>
      <Row className="row flex flex-row justify-content-center">
        <Col>This is a profile</Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
        </Col>
      </Row>
      <Row >
        <Col></Col>
        <Col>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col>
        </Col>
      </Row>
    </Container>
  );
};
