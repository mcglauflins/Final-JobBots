import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

export const Header = () => {
  return (
    <Container className="container">
      <Row className="rowHead">
        <Col>One column</Col>
      </Row>
      <Row>
        <Col>One of two columns</Col>
        <Col className="colHead">
          <h3 className="header1">Job Applications</h3>
        </Col>
      </Row>
      <Row className="rowHead1">
        <Col>One of two columns</Col>
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
