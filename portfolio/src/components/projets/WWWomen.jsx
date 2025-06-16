import React from 'react';
import Section from './Section';
import { useLanguage } from '../../context/LanguageContext.jsx';
import './ProjectPage.css';

const content = {
  fr: {
    header: {
      title: 'WWWomen',
      subtitle: 'Un site one-page pour célébrer et connecter les femmes',
    },
    sections: [
      {
        texts: [
          {
            title: 'Le Concept',
            text: 'L\'objectif était de créer une plateforme inspirante pour mettre en lumière les réussites des femmes.',
          },
          {
            title: 'Mon Approche',
            text: 'À partir du concept graphique de souligner le travail de femme, j\'ai créé une charte graphique avant de designer la mise en page du site. Je me suis appuyé sur les lois de gestalt notamment la loi de la proximité et la loi de la similarité pour organiser le contenu.',
          },
        ],
        images: [
          { image: '/WWWomen/wwwomen3.png', title: 'Accueil du site' },
          { image: '/WWWomen/wwwomen4.png', title: 'Mockup tablette' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/WWWomen/CharteGraphique.png', title: 'Charte Graphique' },
          { image: '/WWWomen/wwwomen2.png', title: 'Charte Graphique' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/WWWomen/wwwomen1.png', title: 'Mockup Ordinateur' },
        ],
      },
    ],
  },

  en: {
    header: {
      title: 'WWWomen',
      subtitle: 'A one-page website to celebrate and connect women',
    },
    sections: [
      {
        texts: [
          {
            title: 'The Concept',
            text: 'The goal was to create an inspiring platform to highlight women’s achievements.',
          },
          {
            title: 'My Approach',
            text: 'Using the graphic concept of highlighting women’s work, I developed a visual identity before designing the site layout. I relied on Gestalt principles, especially proximity and similarity, to structure the content.',
          },
        ],
        images: [
          { image: '/WWWomen/wwwomen3.png', title: 'Website homepage' },
          { image: '/WWWomen/wwwomen4.png', title: 'Tablet mockup' },
          { image: '/WWWomen/CharteGraphique.png', title: 'Graphic identity' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/WWWomen/wwwomen1.png', title: 'Desktop mockup' },
        ],
      },
    ],
  },
};

const WWWomen = () => {
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

export default WWWomen;
