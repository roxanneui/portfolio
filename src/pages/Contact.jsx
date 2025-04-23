import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LanguageContext } from '../context/LanguageContext';

export default function Contact() {
  const { language } = useContext(LanguageContext);

  const content = {
    fr: {
      contactText: "Me contacter",
    },
    en: {
      contactText: "Contact me",
    },
  };

  return (
    <>
      <Header />
      <main className="contact" style={{ padding: '2rem' }}>
        <h1>{content[language].contactText}</h1>
        
      </main>
      <Footer />
    </>
  );
}