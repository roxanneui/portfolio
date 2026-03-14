import React from 'react';
import Section from './Section.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';
import './ProjectPage.css';

const content = {
  fr: {
    header: {
      title: 'Protection Civile',
      subtitle: 'Une nouvelle ville, un nouveau logo !',
    },
    sections: [
      {
        texts: [
          {
            title: 'Le Brief',
            text: 'Avec l\'ajout de Saint-Denis, dans les villes où la Protection Civile agit, il fallait absolument revoir le logo.',
          },
        ],
        images: [
          { image: '/ProtectionCivile/MoodboardRecherches.png', title: '' },
          { image: '/ProtectionCivile/ExplicationsLogo.png', title: '' },
          { image: '/ProtectionCivile/MockupTshirt.jpg', title: '' },
        ],
      },
    ],
  },

  en: {
    header: {
      title: '',
      subtitle: '',
    },
    sections: [
      {
        texts: [
          {
            title: '',
            text: '',
          },
          {
            title: '',
            text: '',
          },
        ],
        images: [
          { image: '', title: '' },
          { image: '', title: '' },
        ],
      },
    ],
  },
};

const GaiaCo = () => {
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

export default GaiaCo;
