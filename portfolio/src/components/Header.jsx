import React, { useState } from "react";
import "./Header.css";
import logo from "/assets/Logo.png";
import burgerBar from "/burger-bar.png";

import { FaLinkedinIn, FaFileDownload, FaBars, FaTimes } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

const sectionNames = {
  fr: {
    projets: "Projets",
    apropos: "À propos",
    journal: "Journal",
  },
  en: {
    projets: "Projects",
    apropos: "About",
    journal: "Journal",
  },
};

function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes size={24} />
        ) : (
          <img src={burgerBar} alt="Menu" style={{ width: 24, height: 24 }} />
        )}
      </div>

      <div className={`header-container ${isMenuOpen ? "open" : ""}`}>
        <div className="top-section">
          <div className="logo-section">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <nav className="nav-section">
            <NavLink to="/projets" onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
              {sectionNames[language].projets}
            </NavLink>
            <NavLink to="/a-propos" onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
              {sectionNames[language].apropos}
            </NavLink>
            <NavLink to="/journal" onClick={closeMenu} className={({ isActive }) => (isActive ? "active-link" : "")}>
              {sectionNames[language].journal}
            </NavLink>
          </nav>
        </div>

        <div className="bottom-section">
          <div className="icon-links">
            <a href="https://www.linkedin.com/in/roxanne-landry-144976289/" target="_blank" rel="noreferrer"><FaLinkedinIn size={24} title="LinkedIn" /></a>
            <a href="/RoxanneLANDRYCVS.pdf" download><FaFileDownload size={24} title="CV" /></a>
            <a href="mailto:roxannelandry.pro@gmail.com"><IoMailUnread size={24} title="Email" /></a>
          </div>

          <div className="language-toggle">
            <button onClick={toggleLanguage}>
              {language === "fr" ? "EN" : "FR"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
