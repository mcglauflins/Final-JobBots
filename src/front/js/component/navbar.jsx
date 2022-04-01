import React from "react";
import { Link } from "react-router-dom";
import logo from "/workspace/Final-JobBots/src/front/img/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light" id="navbar">
      <div className="container">
        <img src={logo} />
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
              <i class="fas fa-bars"></i>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
