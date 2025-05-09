import React, { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

function Header() {
  const [showHeader, setShowHeader] = useState(true);
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
    fr: ['Projets', 'Carnet', 'Créations'],
    en: ['Projects', 'Sketchbook', 'Creations'],
  };

  return (
    <header className={`header ${showHeader ? 'visible' : 'hidden'} redirection`}>
      <div className="logo-container">
        <Link to="/">
          <img src="/portfolio/Logo1.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <nav>
        {/* <Link to="/gallery">{navText[language][0]}</Link> */}
        <Link to="/#projects">{navText[language][0]}</Link>
        <Link to="/creations">{navText[language][2]}</Link>
        {/* <Link to="/contact">{navText[language][1]}</Link> */}
      </nav>
    </header>
  );
}

export default Header;
