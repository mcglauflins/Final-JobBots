import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "../component/sideBar.jsx";
import "../../styles/dashboard.css";

export const Dashboard = () => {



  return (
    <div className="d-flex" style={{ height: "100vh"}}>
      <Sidebar />
      <Container>
        <Row className="dashboard">
          <Col
            // md={{ span: 4, offset: 4 }}
            // sm={{ span: 9, offset: 2 }}
            // xs={{ span: 12, offset: 0 }}
            className="hi"
          >
            <h1>My Profile</h1>
          </Col>
          <Col
            // md={{ span: 4, offset: 4 }}
            // sm={{ span: 9, offset: 2 }}
            // xs={{ span: 12, offset: 0 }}
            className="hi2"
          >
            <h1>Keywords</h1>
          </Col>
        </Row>
        <Row>
          <Col
            // md={{ span: 4, offset: 4 }}
            // sm={{ span: 9, offset: 2 }}
            // xs={{ span: 12, offset: 0 }}
            className="hi3"
          >
            <h1>Linkedin information</h1>
            <Button className="btn btn-primary" onClick={() => {getDashboard()}}>Dashboard</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
