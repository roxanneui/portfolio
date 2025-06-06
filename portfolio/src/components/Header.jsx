import React from "react";
import "./Header.css";
import logo from "/assets/Logo.png";

import { FaLinkedinIn } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div className="top-section">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <nav className="nav-section">
          <NavLink
            to="/projets"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Projets
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            À propos
          </NavLink>
          <NavLink
            to="/journal"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Journal
          </NavLink>
        </nav>
      </div>

      <div className="bottom-section">
        <div className="icon-links">
          <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noreferrer"><FaLinkedinIn size={24} title="LinkedIn" /></a>
          <a href="/ton-cv.pdf" download><FaFileDownload size={24} title="CV" /></a>
          <a href="mailto:email@exemple.com"><IoMailUnread size={24} title="Email" /></a>
        </div>

        <div className="language-toggle">
          <button>EN</button> 
        </div>
      </div>
    </div>
  );
}

export default Header;
