import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Sidebar = () => {
  return (
    <>
      <div className="bg-dark" style={{ height: "100%", width: "15%" }}>
        <Nav variant="pills" defaultActiveKey="1" className="d-flex flex-column justify-content-between" style={{ height: "100%"}}>
          <div className="sidebar-top">
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={require("../../img/logo.png").default}
                  width="60%"
                  height="5%"
                  className="d-inline-block align-top"
                  alt="Robologo"
                />
              </Navbar.Brand>
            </Container>
            <Nav.Link href="/profile" eventKey="1">Dashboard</Nav.Link>
            <Nav.Link  eventKey="2">Job Search</Nav.Link>
            <Nav.Link  eventKey="3">Resume Upload</Nav.Link>
            <Nav.Link  eventKey="4">Settings</Nav.Link>
          </div>
          <div className="sidebar-bottom">
            <Nav.Link href="/profile">Sign Out</Nav.Link>
          </div>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
