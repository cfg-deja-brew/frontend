import React from "react";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const NavbarLogin = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark text-light shadow-5-strong p-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="logo"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto px-4">
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLogin;