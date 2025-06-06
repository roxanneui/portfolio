import React from 'react';
import Section from './Section';
import './ProjectPage.css';

const MichelEtColette = () => {
  const section1Texts = [
    {
      title: 'Le Brief',
      text: 'Une semaine pour imaginer la refonte de la marque Michel et Augustin, nos compagnons de l\'apéro. Colette débarque et s\'impose. Elle veut une cible jeune, veggie et moderniser la marque.'
    }
  ];

  const section1Images = [
    {
      image: '../MichelEtColette/CharteLogo.png',
      title: 'Charte du nouveau logo'
    },
    {
      image: '../MichelEtColette/ChartePackaging.png',
      title: 'Détails du packaging'
    }
  ];

   const section2Images = [
    {
      image: '../MichelEtColette/Mockup1.png',
      title: 'Packaging en situation'
    }
  ];


  return (
    <div className="project-page-container">
      <div className="project-header">
        <h1>Michel et Colette</h1>
        <p>La nouvelle marque de gâteaux apéros</p>
      </div>

      <Section textData={section1Texts} imageData={section1Images} />

      <Section imageData={section2Images}/>
    </div>
  );
};

export default MichelEtColette;