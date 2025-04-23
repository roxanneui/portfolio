import React, { useContext } from "react";
import ProjectPage from "../../components/ProjectPage";
import { LanguageContext } from '../../context/LanguageContext';

function Ecomiam() {
    
  const { language } = useContext(LanguageContext);
  const informations =
  {
    "fr": {
      "title": "Écomiam",
      "description": "Écomiam est une application éco-responsable qui lutte contre le gaspillage alimentaire.",
      "skills": ['Design Thinking', "Interface UI", "Travail d'équipe",],
      "figmaLink": "https://www.figma.com/design/2PcsH4LwEKMOlqIeKyacye/MaquetteUXforGood--Copy-?node-id=0-1&t=3t14Vlg7HSfFlP6w-1",
    },
    "en": {
      "title": "Ecomiam",
      "description": "Ecomiam is a planet friendly app that fights against food waste.",
      "skills": ['Design Thinking', "UI interface", "Group Work",],
      "figmaLink": "https://www.figma.com/design/2PcsH4LwEKMOlqIeKyacye/MaquetteUXforGood--Copy-?node-id=0-1&t=3t14Vlg7HSfFlP6w-1"
    }
  }  
  const images = [
    "/Ecomiam/Ecomiammockup2.1.png",
    "/Ecomiam/Ecomiammockup1.png",
    "/Ecomiam/Eco.png"
  ];

  console.log("Langue sélectionnée :", language);
  console.log("Titre récupéré :", informations[language]?.title);

  return <ProjectPage
  
  title={informations[language].title}
  description={informations[language].description}
  skills={informations[language].skills}
  images={images} 
  figmaLink={informations[language].figmaLink} />;
}

export default Ecomiam;