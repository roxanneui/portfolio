import React from 'react';
import Section from './Section';
import './ProjectPage.css';

const Motif = () => {
  const section1Texts = [
    {
      title: 'Le Brief',
      text: 'En m\'inspirant des l\'univers des oeuvres de l\'artiste marseillais David Vanadia, j\'ai dessiné des formes. L\'artiste reprenant des symboles humains et des parties du corps, j\'ai choisi de rester dans des formes abstraites pour créer ma composition.'
    },
  ];

  const section1Images = [
    {
      image: '../Motif/Motif.png',
      title: 'Motif'
    }
  ];

   const section2Images = [
    {
      image: '../Motif/AfficheMotif.png',
      title: 'Affiche'
    },
     {
      image: '../Motif/Objet.png',
      title: 'Objet'
    },
  ];


  return (
    <div className="project-page-container">
      <div className="project-header">
        <h1>Motif</h1>
        <p>Création d'un motif, d'une affiche et d'un objet personalisé</p>
      </div>

      <Section textData={section1Texts} imageData={section1Images} />

      <Section imageData={section2Images}/>
    </div>
  );
};

export default Motif;