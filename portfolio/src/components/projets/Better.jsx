import React from 'react';
import Section from './Section';
import './ProjectPage.css';
import { useLanguage } from '../../context/LanguageContext.jsx';

const content = {
  fr: {
    header: {
      title: 'Better',
      subtitle: 'Conception UI d\'un blog mettant en avant des objets de design écoresponsable',
    },
    sections: [
      {
        texts: [
          {
            title: 'Mon Travail',
            text: 'En m\'inspirant directement de l\'objet mis en valeur dans cette version du site, j\'ai créé un moodboard et un univers graphique à Better.',
          },
        ],
        images: [
          { image: '../Better/Better1.png', title: 'Accueil du site' },
          { image: '../Better/Better5.png', title: 'Aperçu global' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '../Better/BetterSam.png', title: 'Présentation de la Créatrice' },
          { image: '../Better/Better4.mp4', title: 'Déclinaisons' },
        ],
      },
    ],
  },

  en: {
    header: {
      title: 'Better',
      subtitle: 'UI design of a blog highlighting eco-responsible design objects',
    },
    sections: [
      {
        texts: [
          {
            title: 'My Work',
            text: 'Inspired directly by the object highlighted on the site, I created a moodboard and graphic universe for Better.',
          },
        ],
        images: [
          { image: '../Better/Better1.png', title: 'Home Page' },
          { image: '../Better/Better5.png', title: 'Global Overview' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '../Better/BetterSam.png', title: 'Creator Presentation' },
          { image: '../Better/Better4.mp4', title: 'Variations' },
        ],
      },
    ],
  },
};

const Better = () => {
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

export default Better;