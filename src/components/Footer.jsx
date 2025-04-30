import './Footer.css';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function Footer({ isLineDisplayed = true }) {
  const { language } = useContext(LanguageContext);
  const content = {
    fr: {
      thankYou: 'Merci de votre curiosité !',
      rights: '(designé et codé par moi) Tous droits réservés',
      contactTitle: 'Envie d\'échanger ?',
    },
    en: {
      thankYou: 'Thanks for your curiosity!',
      rights: '(dev and design by me) All rights reserved',
      contactTitle: 'Want to chat?',
    },
  };

  return (
    <footer className="footer" style={{ borderTop: isLineDisplayed ? '2px solid black' : '' }}>
      <div className="footer-left">
        <h2>{content[language].thankYou}</h2>
        <p className="footer-rights">© 2025 Roxanne Landry. {content[language].rights}</p>
      </div>

      <div className="footer-right">
        <h2 className="footer-contact-title">{content[language].contactTitle}</h2>
        <div className="footer-icons">
          <a href="https://www.instagram.com/roxanne.ui" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/roxanne-landry-144976289/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
          </a>
          <a href="mailto:roxannelandry.pro@gmail.com">
            <FaEnvelope className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
