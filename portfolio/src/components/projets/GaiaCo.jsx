import React from 'react';
import Section from './Section';
import { useLanguage } from '../../context/LanguageContext.jsx';
import './ProjectPage.css';

const content = {
  fr: {
    header: {
      title: 'GaiaCo (en cours...)',
      subtitle: 'Un outil de gestion de relations personnelles et professionnelles',
    },
    sections: [
      {
        texts: [
          {
            title: 'Le Défi',
            text: 'Je me suis donné comme défi de créer GaiaCo afin d\'approfondir mes connaissances en UX.',
          },
          {
            title: 'Mon Approche',
            text: 'Répondre à une vraie problématique et créer une solution. Pour réaliser un outil esthétique mais surtout utile, je passe par toutes les étapes du design thinking : Définir, Imaginer, Synthétiser, Prototyper et Tester.',
          },
        ],
        images: [
          { image: '/GaiaCo/PersonaLaura.png', title: 'Premier Persona' },
          { image: '/GaiaCo/ProblemeSolution.png', title: 'D\'une problématique à la solution' },
          { image: '/GaiaCo/Wire1.png', title: 'Premier prototype' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/GaiaCo/Logo.png', title: 'Logo évoquant le lien' },
        ],
      },
    ],
  },

  en: {
    header: {
      title: 'GaiaCo (in progress...)',
      subtitle: 'A tool for managing personal and professional relationships',
    },
    sections: [
      {
        texts: [
          {
            title: 'The Challenge',
            text: 'I challenged myself to create GaiaCo in order to deepen my UX knowledge.',
          },
          {
            title: 'My Approach',
            text: 'Addressing a real issue and creating a solution. To build a tool that is both aesthetic and useful, I go through all the stages of design thinking: Define, Ideate, Synthesize, Prototype, and Test.',
          },
        ],
        images: [
          { image: '/GaiaCo/PersonaLaura.png', title: 'First Persona' },
          { image: '/GaiaCo/ProblemeSolution.png', title: 'From problem to solution' },
          { image: '/GaiaCo/Wire1.png', title: 'First prototype' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/GaiaCo/Logo.png', title: 'Logo symbolizing connection' },
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
