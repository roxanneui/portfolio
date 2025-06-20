import React from 'react';
import Section from './Section';
import { useLanguage } from '../../context/LanguageContext.jsx';
import './ProjectPage.css';

const content = {
  fr: {
    header: {
      title: 'Sockmates',
      subtitle: 'Pour l\'amour des chaussettes !',
    },
    sections: [
      {
        texts: [
          {
            title: 'Le Brief',
            text: 'Dans le cadre d\'un projet scolaire, réaliser une marque d\'accessoires, du concept graphique à la réalisation d\'une maquette \'point de vente\'.',
          },
        ],
        images: [
          { image: '/Sockmates/Logo.png', title: '' },
          { image: '/Sockmates/Explications.png', title: '' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/Sockmates/Charte.png', title: '' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/Sockmates/Reserve.png', title: '' },
          { image: '/Sockmates/Interdits.png', title: '' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/Sockmates/AfficheMockup.png', title: '' },
          { image: '/Sockmates/Bar.png', title: 'Initiation à Blender pour créer un point de vente' },
        ],
      },
    ],
  },

  en: {
    header: {
      title: 'Sockmates',
      subtitle: 'For the love of socks',
    },
    sections: [
      {
        texts: [
          {
            title: 'The Brief',
            text: 'Create a brand of accessories from the graphic concept to a 3D model of a pop up store for the accessories.',
          },
        ],
        images: [
          { image: '/Sockmates/Logo.png', title: '' },
          { image: '/Sockmates/Explications.png', title: '' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/Sockmates/Charte.png', title: '' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/Sockmates/Reserve.png', title: '' },
          { image: '/Sockmates/Interdits.png', title: '' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/Sockmates/AfficheMockup.png', title: '' },
          { image: '/Sockmates/Bar.png', title: 'First steps on blender to imagine a pop-up !' },
        ],
      },
    ],
  },
  };

const Sockmates = () => {
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

export default Sockmates;
