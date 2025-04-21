import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LanguageContext } from '../context/LanguageContext';

function Gallery() {
  const { language } = useContext(LanguageContext);
  const informations =
    {
      "fr":  {
      "title" : "Gallerie"
      },
      "en":  {
      "title" : "Gallery"
      }
    }

  return (
    <>
      <Header />
      {informations[language].title}
      <main className="gallery" style={{ padding: '2rem' }}>
        <div className="projects" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link to="/projects/better">Projet Better</Link>
          <Link to="/projects/lescheminsdelanature">Les Chemins de la Nature</Link>
          <Link to="/projects/wwwoman">WWWoman</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Gallery;