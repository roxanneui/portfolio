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
          { image: '/MichelEtColette/CharteLogo.png', title: 'New logo guide' },
          { image: '/MichelEtColette/ChartePackaging.png', title: 'Packaging details' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/MichelEtColette/Mockup1.png', title: 'Packaging in context' },
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
