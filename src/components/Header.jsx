import React, { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useContext(LanguageContext);

  let lastScroll = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navText = {
    fr: ['À propos', 'Projets web', 'Créations'],
    en: ['About', 'Web projects', 'Creations'],
  };

  return (
    <div>
      <div className="header-background">
        <div className="buttons-background"></div>
      </div>

      <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
        <div className="logo-container">
          <Link to="/">
            <img src="/portfolio/Logo1.png" alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Hamburger button for mobile */}
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img
            src={isMenuOpen ? '/portfolio/burger-bar.png' : '/portfolio/burger-bar.png'}
            alt="Menu"
            className="hamburger-icon"
            style={{ width: '45px', height: '45px' }}
          />
        </button>

        {/* Desktop nav */}
        <div className='nav-container'>
          <nav className='nav-links'>
            <Link smooth to="/#about">{navText[language][0]}</Link>
            <Link smooth to="/#projects">{navText[language][1]}</Link>
            <Link to="/creations">{navText[language][2]}</Link>
          </nav>
        </div>

        {/* Mobile nav */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''} ${showHeader ? 'visible' : 'hidden'}`}>
          <nav className='mobile-nav-links'>
            <Link smooth to="/#about" onClick={() => setIsMenuOpen(false)}>{navText[language][0]}</Link>
            <Link smooth to="/#projects" onClick={() => setIsMenuOpen(false)}>{navText[language][1]}</Link>
            <Link to="/creations" onClick={() => setIsMenuOpen(false)}>{navText[language][2]}</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
