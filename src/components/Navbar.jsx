import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";
import Logo from "../assets/shared/logo.svg";
import openMenu from "../assets/shared/icon-hamburger.svg";
import closeMenu from "../assets/shared/icon-close.svg";

const Navbar = () => {
  const openNav = () => {
    const getNav = document.querySelector(".card");
    getNav.style.display = "block";
  };

  const closeNav = () => {
    const getNav = document.querySelector(".card");
    getNav.style.display = "none";
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="mobile-nav">
        <button onClick={openNav}>
          <img src={openMenu} alt="menu" />
        </button>
        <div className="card">
          <div className="mobile-list">
            <Link onClick={closeNav} to="/">
              00 Home
            </Link>
            <Link onClick={closeNav} to="/destination">
              01 Destination
            </Link>
            <Link onClick={closeNav} to="/crew">
              02 Crew
            </Link>
            <Link onClick={closeNav} to="/technology">
              03 Technology
            </Link>
            <button onClick={closeNav}>
              <img src={closeMenu} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="list">
          <Link to="/">00 Home</Link>
          <Link to="/destination">01 Destination</Link>
          <Link to="/crew">02 Crew</Link>
          <Link to="/technology">03 Technology</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
