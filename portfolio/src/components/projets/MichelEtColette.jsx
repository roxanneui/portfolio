import React from 'react';
import Section from './Section';
import { useLanguage } from '../../context/LanguageContext.jsx';
import './ProjectPage.css';

const content = {
  fr: {
    header: {
      title: 'Michel et Colette',
      subtitle: 'La nouvelle marque de gâteaux apéros',
    },
    sections: [
      {
        texts: [
          {
            title: 'Le Brief',
            text: 'Une semaine pour imaginer la refonte de la marque Michel et Augustin, nos compagnons de l\'apéro. Colette débarque et s\'impose. Elle veut une cible jeune, veggie et moderniser la marque.',
          },
        ],
        images: [
          { image: '../MichelEtColette/CharteLogo.png', title: 'Charte du nouveau logo' },
          { image: '../MichelEtColette/ChartePackaging.png', title: 'Détails du packaging' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '../MichelEtColette/Mockup1.png', title: 'Packaging en situation' },
        ],
      },
    ],
  },

  en: {
    header: {
      title: 'Michel and Colette',
      subtitle: 'The new savory snack brand',
    },
    sections: [
      {
        texts: [
          {
            title: 'The Brief',
            text: 'One week to reimagine the Michel et Augustin brand — our aperitif companions. Colette arrives and takes charge. She wants a younger, veggie-focused audience and a modernized brand identity.',
          },
        ],
        images: [
          { image: '../MichelEtColette/CharteLogo.png', title: 'New logo guide' },
          { image: '../MichelEtColette/ChartePackaging.png', title: 'Packaging details' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '../MichelEtColette/Mockup1.png', title: 'Packaging in context' },
        ],
      },
    ],
  },
};

const MichelEtColette = () => {
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

export default MichelEtColette;
