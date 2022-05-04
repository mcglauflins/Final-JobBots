import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { LoginModal } from "./loginModal.jsx";
import "../../styles/navbar.css";


export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <React.Fragment xs={6} md={4}>
      <LoginModal show={showModal} onHide={handleShowModal} />
      <nav className="navbar navbar-light bg-light expand-lg">
        <div className="container">
          <Link to="/">
            <button className="landingPage">
              <img src={logo} />
            </button>
          </Link>
          <div className="ml-auto">
            <div className="icons-right">
              <div className="hamburger">
                {/* <Link to="/demo"> */}
                <button
                  className="btn btn-primary"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bars"></i>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link to="/about" className="dropdown-item" >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link to="/faqs" className="dropdown-item" href="#">
                      FAQ
                    </Link>
                  </li>
                </ul>
                {/* </Link> */}
              </div>
              <div className="profile">
                {/* <Link to="/demo"> */}
                <button
                  className="btn btn-primary"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user"></i>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li onClick={handleShowModal}>
                    <a className="dropdown-item" href="#">
                      Login
                    </a>
                  </li>
                  <li onClick={handleShowModal}>
                    <a className="dropdown-item" href="#">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      Dashboard
                    </Link>
                  </li>
                </ul>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
