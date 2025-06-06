import React from 'react';
import Section from './Section';
import './ProjectPage.css';

const Ecomiam = () => {
  const section1Texts = [
    {
      title: 'La mission',
      text: 'Réduire le gaspillage alimentaire et facilité l’accès aux produits bio. Une app pensé pour ceux qui veulent mieux gérer leur alimentation, leur temps et leur budgets.'
    },
    {
      title: 'Mon processus',
      text: 'J\'ai pu réalisé les personnas, participer à la création d\'un user flow, le wireframing. Lors de la phase de prototypage j\'ai pu itérer plusieurs fois avec mon équipe, afin d\'obtenir un résultat donnant la meilleur solution pour les problèmes de nos utilisateurs'
    }
  ];

  const section1Images = [
    {
      image: '../Ecomiam/Ecomiammockup2.1.png',
      title: 'L\'application'
    }
  ];

  const section2Texts = [
    {
      title: '',
      text: 'Ce projet UX for good m\'a permis de travailler en équipe. Nous avons rassembler nos forces et nos idées en faisant du brainstorm, des recherches utilisateurs, plusieurs prototypages individuels et collectifs avant de réaliser une UI finale sur Figma.'
    }
  ];

  const section2Images = [
    {
      image: '../Ecomiam/EcomiamEva.png',
      title: 'Personas'
    },
    {
      image: '../Ecomiam/Ecomiam1.png',
      title: 'User Journey'
    }
  ];

  const section3Texts = [
    {
      title: '',
      text: ''
    }
  ];
  
  const section3Images = [
    {
      image: '../Ecomiam/Ecomiam3.png',
      title: 'Présentation'
    },
    {
      image: '../Ecomiam/Ecomiammockup2.png',
      title: 'Fonctionnalité rechercher'
    }
  ];

  return (
    <div className="project-page-container">
      <div className="project-header">
        <h1>Écomiam</h1>
        <p>Une application éco-responsable qui lutte contre le gaspillage alimentaire</p>
      </div>

      <Section textData={section1Texts} imageData={section1Images} />

      <Section textData={section2Texts} imageData={section2Images} />

      <Section textData={section3Texts} imageData={section3Images} />
    </div>
  );
};

export default Ecomiam;