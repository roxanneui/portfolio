import React from 'react';
import Section from './Section.jsx';
import './ProjectPage.css';
import { useLanguage } from '../../context/LanguageContext.jsx';

const content = {
  fr: {
    header: {
      title: 'Handisport',
      subtitle: '5 heures pour faire une refonte du site dans le cadre d\'un partiel.',
    },
    sections: [
      {
        texts: [
          {
            title: 'Le défi',
            text: 'J’ai réalisé une refonte du site handisport.org en 5 heures. Mon travail s’est concentré sur l’ergonomie afin de réduire la surcharge visuelle et améliorer la lisibilité. J’ai mis en place une navigation à facettes et appliqué des principes de Gestalt tels que la similarité et la continuité pour créer une interface plus agréable et intuitive.',
          },
        ],
        images: [
          { image: '/Handisport/Handisport_AvantApres.png', title: 'Avant/Après' },
        ],
      },
      {
        texts: [],
        images: [
           { image: '/Handisport/HandisportAccueil.png', title: 'Page d\'Accueil' },
          { image: '/Handisport/HandisportNosSports.png', title: 'Page Nos ports' },
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
            text: 'As part of an exam project, I redesigned a website in just 5 hours. My focus was on ergonomics to reduce visual clutter and improve readability. I implemented a faceted navigation and applied Gestalt principles such as similarity and continuity to create a more intuitive and visually pleasant UI.',
          },
        ],
        images: [
          { image: '/Better/Better1.png', title: 'Home Page' },
          { image: '/Better/Better5.png', title: 'Global Overview' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/Better/BetterSam.png', title: 'Creator Presentation' },
          { image: '/Better/Better4.mp4', title: 'Variations' },
        ],
      },
    ],
  },
};

const Handisport = () => {
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

export default Handisport;