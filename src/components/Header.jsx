import React, { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // 👈 ajout
  const { language } = useContext(LanguageContext);

  let lastScroll = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowHeader(false);
        setMenuOpen(false); // Ferme le menu au scroll
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
      <div className="header-background" style={{ opacity: showHeader ? 1 : 0 }}>
        <div className="buttons-background" />
      </div>
      <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
        <div className="logo-container" onClick={() => setMenuOpen(!menuOpen)}>
          <Link to="#">
            <img src="/portfolio/Logo1.png" alt="Logo" className="logo" />
          </Link>
        </div>
        
        <div className='nav-container'>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <Link smooth to="/#about" onClick={() => setMenuOpen(false)}>{navText[language][0]}</Link>
            <Link smooth to="/#projects" onClick={() => setMenuOpen(false)}>{navText[language][1]}</Link>
            <Link to="/creations" onClick={() => setMenuOpen(false)}>{navText[language][2]}</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
