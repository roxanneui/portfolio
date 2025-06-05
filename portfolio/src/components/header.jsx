import React from "react";
import "./Header.css";
import logo from "/assets/Logo.png";

import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";

function Header({ setActiveSection }) {
  return (
    <header className="site-header">
      <div className="header-container">
      <div className="top-section">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <nav className="nav-section">
          <a href="#projets" onClick={() => setActiveSection("projets")}>Projets</a>
          <a href="#a-propos" onClick={() => setActiveSection("apropos")}>À propos</a>
          <a href="#journal" onClick={() => setActiveSection("journal")}>Journal</a>
        </nav>
      </div>

      <div className="bottom-section">
        <div className="icon-links">
          <a href="tel:+33123456789"><FaPhoneFlip size={24} title="Téléphone" /></a>
          <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noreferrer"><FaLinkedinIn size={24} title="LinkedIn" /></a>
          <a href="/ton-cv.pdf" download><FaFileDownload size={24} title="CV" /></a>
          <a href="mailto:email@exemple.com"><IoMailUnread size={24} title="Email" /></a>
        </div>

        <div className="language-toggle">
          <button>EN</button> 
        </div>
      </div>
      </div>
    </header>
  );
}

export default Header;