import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light" id="navbar">
      <div className="container" >
        <span className="navbar-brand mb-0 h1" style={{color:'#fff'}}>JobBots</span>
        <img src= "src/front/img/logo.png"/>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
            <i className="fa-duotone fa-bars"></i>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
