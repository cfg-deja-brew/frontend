import React from "react";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark text-light shadow-5-strong">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="logo"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto px-4">
            <Link role="button" to="/users" className="nav-link ms-0 ms-md-2 pt-0 pt-md-4 text-light text-end">Log In</Link>
            <Link role="button" to="/books" className="nav-link ms-0 ms-md-2 pt-0 pt-md-4 text-light text-end">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;