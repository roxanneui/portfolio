import React from 'react';
import Section from './Section';
import './ProjectPage.css';

const WWWomen = () => {
  const section1Texts = [
    {
      title: 'Le Concept',
      text: 'L\'objectif était de créer une plateforme inspirante pour mettre en lumière les réussites des femmes.'
    },
    {
      title: 'Mon Approche',
      text: 'À partir du concept graphique de souligner le travail de femme, j\'ai créer une charte graphique avant de designer la mise en page du site. Je me suis appuyé sur les lois de gestalt notamment la loi de la proximité et la loi de la similarité pour organiser le contenu.'
    }
  ];

  const section1Images = [
    {
      image: '../WWWomen/wwwomen3.png',
      title: 'Accueil du site'
    },
    {
      image: '../WWWomen/wwwomen4.png',
      title: 'Mockup tablette'
    },
    {
      image: '../WWWomen/CharteGraphique.png',
      title: 'Charte Graphique'
    }
  ];

   const section2Images = [
    {
      image: '../WWWomen/wwwomen1.png',
      title: 'Mockup Ordinateur'
    }
  ];


  return (
    <div className="project-page-container">
      <div className="project-header">
        <h1>WWWomen</h1>
        <p>Un site one-page pour célébrer et connecter les femmes</p>
      </div>

      <Section textData={section1Texts} imageData={section1Images} />

      <Section imageData={section2Images}/>
    </div>
  );
};

export default WWWomen;