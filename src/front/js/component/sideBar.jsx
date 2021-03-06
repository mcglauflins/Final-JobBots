import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import useStore from "../store/zustand"

const Sidebar = ({navKey}) => {
  const store = useStore()

  const logout = (store) => {
    store.setLogin(false);
    localStorage.removeItem("jwt-token");
  }

  return (
    <>
      <div className="bg-light p-2 text-dark bg-opacity-75" style={{ height: "100%", width: "15%" }}>
        <Nav variant="pills" defaultActiveKey={navKey} className="d-flex flex-column justify-content-between" style={{ height: "100%"}}>
          <div className="sidebar-top">
            <Container>
              <Navbar.Brand href="/">
                <h1>SERC-Bot</h1>
              </Navbar.Brand>
            </Container>
            <Nav.Link href="/dashboard" eventKey="1">Dashboard</Nav.Link>
            <Nav.Link href="/jobs" eventKey="2">Jobs</Nav.Link>
            <Nav.Link href="/settings" eventKey="4"> Settings</Nav.Link>
          </div>
          <div className="sidebar-bottom">
            <Nav.Link href="/" onClick={() => logout(store)}>Sign Out</Nav.Link>
          </div>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;














