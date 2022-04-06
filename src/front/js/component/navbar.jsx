import React from "react";
import { Link } from "react-router-dom";
import logo from "/workspace/Final-JobBots/src/front/img/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light expand-lg" id="navbar">
      <div className="container">
        <img src={logo} />
        <div className="ml-auto">
          <div className="icons-right">
            <Link to="/demo">
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
                  <a className="dropdown-item" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    How it works
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Download
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </Link>
            <Link to="/demo">
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
                <li>
                  <a className="dropdown-item" href="#">
                    Login
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dashboard
                  </a>
                </li>
              </ul>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
