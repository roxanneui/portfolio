import React from 'react';
import Section from './Section';
import './ProjectPage.css';

const Ecomiam = () => {
  const section1Texts = [
    {
      title: 'Le problème',
      text: 'Le gaspillage alimentaire et l\'innaccessibilité aux produits vio est de plus en plus préoccupant'
    },
    {
      title: 'Ma solution',
      text: 'Créer une application mobile qui répond aux besoins de nombreuses personnes toutes conercnées par le gaspillage aliementaire et souhaitant gagner du temps'
    },
    {
      title: 'Mon processus',
      text: 'J\'ai pu réalisé les personnas, le wireframing. Lors de la phase de prototypage j\'ai pu itérer plusieurs fois avec mon équipe, afin d\'obtenir le meilleur résultat.'
    }
  ];

  const section1Images = [
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071',
      title: 'L\'application'
    }
  ];

  const section2Texts = [
    {
      title: 'Un travail d\'équipe',
      text: 'Ce projet blablabakabdkafhd Ce projet blablabakabdkafhd Ce projet blablabakabdkafhd Ce projet blablabakabdkafhd Ce projet blablabakabdkafhd Ce projet blablabakabdkafhd Ce projet blablabakabdkafhdCe projet blablabakabdkafhd'
    }
  ];

  const section2Images = [
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
      title: 'Personas'
    },
    {
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070',
      title: 'User Journey'
    }
  ];

  return (
    <div className="project-page-container">
      <div className="project-header">
        <h1>Ecomiam</h1>
        <p>Une application mobile pour lutter contre le gaspillage alimentaire.</p>
      </div>

      <Section textData={section1Texts} imageData={section1Images} />

      <Section textData={section2Texts} imageData={section2Images} />

    </div>
  );
};

export default Ecomiam;