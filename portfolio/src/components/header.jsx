 import React from "react";
import "./header.css";
import logo from "../assets/Logo.png";
import phoneIcon from "../assets/Phone.png";
import linkedinIcon from "../assets/Linkedin.png";
import cvIcon from "../assets/Cv.png";
import mailIcon from "../assets/Mail.png";

function Header() {
  return (
    <header className="site-header">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <nav className="nav-section">
        <ul>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#a-propos">À propos</a></li>
          <li><a href="#journal">Journal</a></li>
        </ul>
      </nav>

      <div className="bottom-section">
        <div className="icon-links">
          <a href="tel:+33123456789"><img src={phoneIcon} alt="Téléphone" /></a>
          <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
          <a href="/ton-cv.pdf" download><img src={cvIcon} alt="CV" /></a>
          <a href="mailto:email@exemple.com"><img src={mailIcon} alt="Email" /></a>
        </div>

        <div className="language-toggle">
          <button>EN</button> 
        </div>
      </div>
    </header>
  );
}

export default Header;