import React, { useContext } from "react";
import ProjectPage from "../../components/ProjectPage";
import { LanguageContext } from '../../context/LanguageContext';

function Ecomiam() {
    
  const { language } = useContext(LanguageContext);
  const informations =
  {
    "fr": {
      "title": "Écomiam",
      "description": "Écomiam est une application éco-responsable qui lutte contre le gaspillage alimentaire en guidant l'utilisateur vers des points de ventes près de lui. Pour ce projet, j'ai pu creer des personas et réfléchir aux différents parcours utilisateur. J'ai également pu réaliser un wireframe, avant de designer l'interface finale sur figma.",
      "skills": ['Design Thinking', "Interface UI", "Travail d'équipe", 'Identité Visuelle'],
      "figmaLink": "https://www.figma.com/design/2PcsH4LwEKMOlqIeKyacye/MaquetteUXforGood--Copy-?node-id=0-1&t=3t14Vlg7HSfFlP6w-1",
    },
    "en": {
      "title": "Ecomiam",
      "description": "Ecomiam is a planet friendly app that fights against food waste by guiding the user to the stores near his location. For this project, i was able to create personas and think about the user journey. I was also able to work on wireframing, before designing the final interface on figma.",
      "skills": ['Design Thinking', "UI interface", "Group Work", 'Visual Identity',],
      "figmaLink": "https://www.figma.com/design/2PcsH4LwEKMOlqIeKyacye/MaquetteUXforGood--Copy-?node-id=0-1&t=3t14Vlg7HSfFlP6w-1"
    }
  }  
  const images = [
    "/Ecomiam/Ecomiammockup2.1.png",
    '/Ecomiam/Ecomiam1.png',
    "/Ecomiam/EcomiamEva.png",
    "/Ecomiam/EcomiamEmpathyEva.png",
    "/Ecomiam/Wireframing.jpg",
    "/Ecomiam/Ecomiam2.png",
    "/Ecomiam/Ecomiammockup1.png"
  ];

  return <ProjectPage
  
  title={informations[language].title}
  description={informations[language].description}
  skills={informations[language].skills}
  images={images} 
  figmaLink={informations[language].figmaLink} 
  nextProject="/projects/WWWomen"
  />;
}

export default Ecomiam;