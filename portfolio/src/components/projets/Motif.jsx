import React from 'react';
import Section from './Section';
import { useLanguage } from '../../context/LanguageContext.jsx';
import './ProjectPage.css';

const content = {
  fr: {
    header: {
      title: 'Motif',
      subtitle: 'Création d\'un motif, d\'une affiche et d\'un objet personalisé',
    },
    sections: [
      {
        texts: [
          {
            title: 'Le Brief',
            text: 'En m\'inspirant de l\'univers des œuvres de l\'artiste marseillais David Vanadia, j\'ai dessiné des formes. L\'artiste reprenant des symboles humains et des parties du corps, j\'ai choisi de rester dans des formes abstraites pour créer ma composition.',
          },
        ],
        images: [
          { image: '../Motif/Motif.png', title: 'Motif' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '../Motif/AfficheMotif.png', title: 'Affiche' },
          { image: '../Motif/Objet.png', title: 'Objet' },
        ],
      },
    ],
  },

  en: {
    header: {
      title: 'Motif',
      subtitle: 'Creation of a pattern, a poster, and a personalized object',
    },
    sections: [
      {
        texts: [
          {
            title: 'The Brief',
            text: 'Inspired by the artistic world of Marseille-based artist David Vanadia, I drew abstract shapes. Since the artist works with human symbols and body parts, I chose to stay in the realm of abstraction for my composition.',
          },
        ],
        images: [
          { image: '../Motif/Motif.png', title: 'Pattern' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '../Motif/AfficheMotif.png', title: 'Poster' },
          { image: '../Motif/Objet.png', title: 'Object' },
        ],
      },
    ],
  },
};

const Motif = () => {
  const { language } = useLanguage();
  const langContent = content[language];

  return (
    <div className="project-page-container">
      <div className="project-header">
        <h1>{langContent.header.title}</h1>
        <p>{langContent.header.subtitle}</p>
      </div>

      {langContent.sections.map((section, index) => (
        <Section key={index} textData={section.texts} imageData={section.images} />
      ))}
    </div>
  );
};

export default Motif;
