import React from 'react';
import Section from './Section';
import './ProjectPage.css';

const Better = () => {
  const section1Texts = [
    {
      title: 'Mon Travail',
      text: 'En m\'inspirant directement de l\'objet mis en valeur dans cette version du site, j\'ai créer un moodboard et un univers graphique à Better.'
    }
  ];

  const section1Images = [
    {
      image: '../Better/Better1.png',
      title: 'Accueil du site'
    },
    {
      image: '../Better/Better5.png',
      title: 'Aperçu global'
    }
  ];

   const section2Images = [
    {
      image: '../Better/BetterSam.png',
      title: 'Présentation de la Créatrice'
    },
    {
      image: '../Better/Better4.mp4',
      title: 'Déclinaisons'
    }
  ];


  return (
    <div className="project-page-container">
      <div className="project-header">
        <h1>Better</h1>
        <p>Conception UI d'un blog mettant en avant des objets de design écoresponsable</p>
      </div>

      <Section textData={section1Texts} imageData={section1Images} />

      <Section imageData={section2Images}/>
    </div>
  );
};

export default Better;