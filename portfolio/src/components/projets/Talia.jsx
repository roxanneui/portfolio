import React from 'react';
import Section from './Section.jsx';
import './ProjectPage.css';
import { useLanguage } from '../../context/LanguageContext.jsx';

const content = {
  fr: {
    header: {
      title: 'Talia',
      subtitle: 'Design de l\'identité visuelle et du design UI du nouveau chatbot d\'Antalis.',
    },
    sections: [
      {
        texts: [
          {
            title: 'Contexte',
            text: 'Dans le cadre de mon alternance chez Antalis, j\'ai eu l\'opportunité de créer Talia. J\'ai fais plusieurs itérations et tests. Les enjeux principaux étaient de rester dans les codes de la charte graphique d\'Antalis et de collaborer avec les developpeurs par rapport à la faisabilité technique.',
          },
        ],
        images: [
          { image: '/Talia/Talia_Slide3.png', title: '' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/Talia/Talia_Slide1.png', title: '' },
          { image: '/Talia/Talia_Slide2.png', title: '' },
        ],
      },
    ],
  },

  en: {
    header: {
      title: 'Talia',
      subtitle: 'Design of the new Antalis chatbot.',
    },
    sections: [
      {
        texts: [
          {
            title: 'My Work',
            text: 'As part of my apprenticeship at Antalis, I had the opportunity to design the UI for the Talia conversation window. I worked through several iterations and testing phases. The main challenges were to stay consistent with Antalis’ visual identity while collaborating closely with developers to ensure technical feasibility.',
          },
       ],
        images: [
          { image: '/Talia/Talia_Slide3.png', title: '' },
        ],
      },
      {
        texts: [],
        images: [
          { image: '/Talia/Talia_Slide1.png', title: '' },
          { image: '/Talia/Talia_Slide2.png', title: '' },
        ],
      },
    ],
  },
};

const Talia = () => {
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

export default Talia;