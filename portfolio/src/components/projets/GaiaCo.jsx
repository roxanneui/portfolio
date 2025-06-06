import React from 'react';
import Section from './Section';
import './ProjectPage.css';

const GaiaCo = () => {
  const section1Texts = [
    {
      title: 'Le Défi',
      text: 'Je me suis donné comme défi de créer GaiaCo afin d\'approfondir mes connaissances en UX.'
    },
    {
      title: 'Mon Approche',
      text: 'Répondre à une vraie problématique et créer une solution. Pour réaliser un outil esthétique mais surtout utile, je passe par toutes les étapes du design thinking : Définir, Imaginer, Synthétiser, Prototyper et Tester.'
    }
  ];

  const section1Images = [
    {
      image: '../GaiaCo/PersonaLaura.png',
      title: 'Premier Persona'
    },
    {
      image: '../GaiaCo/ProblemeSolution.png',
      title: 'D\'une problématique à la solution'
    },
    {
      image: '../GaiaCo/Wire1.png',
      title: 'Premier prototype'
    }
  ];

   const section2Images = [
    {
      image: '../GaiaCo/Logo.png',
      title: 'Logo évoquant le lien'
    }
  ];


  return (
    <div className="project-page-container">
      <div className="project-header">
        <h1>GaiaCo (en cours...) </h1>
        <p>Un outil de gestion de relations personnelles et professionnelles</p>
      </div>

      <Section textData={section1Texts} imageData={section1Images} />

      <Section imageData={section2Images}/>
    </div>
  );
};

export default GaiaCo;