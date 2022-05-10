import React from "react";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark shadow-5-strong">
   <a class="navbar-brand" href="#">
    <img src={logo} width="150" height="110" alt="logo"/>
  </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item active">
            <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/coffee-shop-search/leicester">Leicester</a>
        </li>
        </ul>
        <ul class="navbar-nav ms-auto px-4">
        <li class="nav-item">
            <a class="nav-link" href="#">Log in</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Sign Up</a>
        </li>
        </ul>
    </div>
    </nav>
  );
};

export default Navbar;