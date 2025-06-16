import React from 'react';
import Section from './Section';
import './ProjectPage.css';
import { useLanguage } from "../../context/LanguageContext.jsx";

const Ecomiam = () => {
  const content = {
    fr: {
      header: {
        title: "Écomiam",
        subtitle: "Une application éco-responsable qui lutte contre le gaspillage alimentaire",
      },
      sections: [
        {
          texts: [
            {
              title: "La mission",
              text: "Réduire le gaspillage alimentaire et facilité l’accès aux produits bio. Une app pensée pour ceux qui veulent mieux gérer leur alimentation, leur temps et leur budget."
            },
            {
              title: "Mon processus",
              text: "J'ai pu réaliser les personas, participer à la création d’un user flow, le wireframing. Lors de la phase de prototypage, j’ai pu itérer plusieurs fois avec mon équipe pour trouver la meilleure solution aux problèmes de nos utilisateurs."
            }
          ],
          images: [
            { image: '/Ecomiam/Ecomiammockup2.1.png', title: "L'application" }
          ]
        },
        {
          texts: [
            {
              title: "",
              text: "Ce projet UX for good m’a permis de travailler en équipe. Nous avons rassemblé nos forces en faisant du brainstorming, des recherches utilisateurs, et plusieurs prototypes avant de réaliser une UI finale sur Figma."
            }
          ],
          images: [
            { image: '/Ecomiam/EcomiamEva.png', title: "Personas" },
            { image: '/Ecomiam/Ecomiam1.png', title: "User Journey" }
          ]
        },
        {
          texts: [],
          images: [
            { image: '/Ecomiam/Ecomiam3.png', title: "Présentation" },
            { image: '/Ecomiam/Ecomiammockup2.png', title: "Fonctionnalité rechercher" }
          ]
        }
      ]
    },

    en: {
      header: {
        title: "Écomiam",
        subtitle: "An eco-responsible app fighting against food waste",
      },
      sections: [
        {
          texts: [
            {
              title: "The mission",
              text: "Reduce food waste and make organic products more accessible. An app designed for people who want to better manage their diet, time, and budget."
            },
            {
              title: "My process",
              text: "I created personas, helped build a user flow, and did wireframing. During the prototyping phase, I iterated multiple times with my team to find the best solution to our users’ problems."
            }
          ],
          images: [
            { image: '/Ecomiam/Ecomiammockup2.1.png', title: "The App" }
          ]
        },
        {
          texts: [
            {
              title: "",
              text: "This UX for Good project allowed me to work in a team. We combined our strengths through brainstorming, user research, and multiple prototypes before designing a final UI on Figma."
            }
          ],
          images: [
            { image: '/Ecomiam/EcomiamEva.png', title: "Personas" },
            { image: '/Ecomiam/Ecomiam1.png', title: "User Journey" }
          ]
        },
        {
          texts: [],
          images: [
            { image: '/Ecomiam/Ecomiam3.png', title: "Presentation" },
            { image: '/Ecomiam/Ecomiammockup2.png', title: "Search feature" }
          ]
        }
      ]
    }
  };

  const { language } = useLanguage();
  const langContent = content[language];

  return (
    <div className="project-page-container">
      <div className="project-header">
        <h1>{langContent.header.title}</h1>
        <p>{langContent.header.subtitle}</p>
      </div>

      {langContent.sections.map((section, index) => (
        <Section
          key={index}
          textData={section.texts}
          imageData={section.images}
        />
      ))}
    </div>
  );
};

export default Ecomiam;