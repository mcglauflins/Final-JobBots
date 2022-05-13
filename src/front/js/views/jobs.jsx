import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/welcome.css";
import Sidebar from "../component/sideBar.jsx"

const Jobs = () => {

  return (
    <div className="d-flex" style={{height:"100vh"}}>
    <Sidebar navKey="2"/>
    <Container>
        <h1 className="title one">This Feature is Coming Soon!</h1>
    </Container>
    </div>
  );
};
export default Jobs;