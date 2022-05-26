import React from "react";
import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['sessionId'])
  const sessionId = cookies['sessionId']

  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark text-light shadow-5-strong p-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="logo"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto px-4">
            {sessionId
              ? <>
                  <Link role="button" to="/profile" className="nav-link ms-0 ms-md-2 pt-0 pt-md-4 text-light text-end">My Profile</Link>
                  <Link role="button" to="/logout" className="nav-link ms-0 ms-md-2 pt-0 pt-md-4 text-light text-end">Log Out</Link>
                </>
              : <>
                  <Link role="button" to="/login" className="nav-link ms-0 ms-md-2 pt-0 pt-md-4 text-light text-end">Log In</Link>
                  <Link role="button" to="/signup" className="nav-link ms-0 ms-md-2 pt-0 pt-md-4 text-light text-end">Sign Up</Link>
                </>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;