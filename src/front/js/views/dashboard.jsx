import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Dashboard = () => {
  return (
    <Container>
      <Row className="dashboard">
        <Col
          md={{ span: 5, offset: 3 }}
          sm={{ span: 9, offset: 2 }}
          xs={{ span: 12, offset: 0 }}
          lg={{ span: 12, offset: 3 }}
          className="hi"
        >
          <h3>hi</h3>
        </Col>
      </Row>
      <Row>
        <Col
          md={{ span: 4, offset: 4 }}
          sm={{ span: 9, offset: 2 }}
          xs={{ span: 12, offset: 0 }}
          className="hi"
        >
          <h1>hi</h1>
        </Col>
      </Row>
      <Row className="hi">
        <Col></Col>
      </Row>
    </Container>
  );
};
