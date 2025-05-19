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
    fr: ['Projets', 'Créations'],
    en: ['Projects', 'Creations'],
  };

  return (
    <div>
      <div className="header-background" style={{ opacity: showHeader ? 1 : 0 }}>
        <div className="buttons-background">
        </div>
      </div>
      <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
        <div className="logo-container">
          <Link to="/">
            <img src="/portfolio/Logo1.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <div className='nav-container'>
          <nav className='nav-links'>
            <Link to="/#projects">{navText[language][0]}</Link>
            <Link to="/creations">{navText[language][1]}</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
