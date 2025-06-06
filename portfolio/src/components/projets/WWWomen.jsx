import React from 'react';
import Section from './Section';
import './ProjectPage.css';

const WWWomen = () => {
  const section1Texts = [
    {
      title: 'Le Défi',
      text: 'L\'objectif était de créer une plateforme inspirante pour mettre en lumière les réussites des femmes dans le domaine de la technologie, un secteur souvent sous-représenté.'
    },
    {
      title: 'Notre Approche',
      text: 'Nous avons opté pour un design épuré et une expérience utilisateur intuitive, centrée sur des histoires personnelles et des parcours professionnels authentiques.'
    }
  ];

  const section1Images = [
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071',
      title: 'Atelier de Collaboration'
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
      title: 'Session de Brainstorming'
    },
    {
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070',
      title: 'Wireframing et Prototypage'
    }
  ];

  const section2Texts = [
    {
      title: 'Le Résultat',
      text: 'WWWomen est devenue une communauté florissante, offrant des ressources, du mentorat et une visibilité accrue pour des milliers de femmes, stimulant ainsi la diversité et l\'innovation dans le secteur.'
    }
  ];


  return (
    <div className="project-page-container">
      <div className="project-header">
        <h1>WWWomen</h1>
        <p>Une plateforme pour célébrer et connecter les femmes dans la tech.</p>
      </div>

      <Section textData={section1Texts} imageData={section1Images} />

      <Section textData={section2Texts} />
    </div>
  );
};

export default WWWomen;