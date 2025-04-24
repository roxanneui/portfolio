import React, { useContext } from "react";
import ProjectPage from "../../components/ProjectPage";
import { LanguageContext } from '../../context/LanguageContext';

function Better() {

  const { language } = useContext(LanguageContext);
  const informations =
  {
    "fr": {
      "title": "Better Designs",
      "description": "Better Designs est un site web type blog où chaque semaine est présenté un objet de design éco-responsable et son histoire",
      "skills": ["One Page", "Web design"],
      'figmaLink': 'https://www.figma.com/design/Cr5pwZu2O7ilInBK7Qr9m7/LANDRY_Roxanne_BetterDesignsOnePage?node-id=0-1&t=7EM33MOIYHd3Y5Zu-1',
    },
    "en": {
      "title": "Better Designs",
      "description": "Better design is a web site who acts like a blog, where every week an environnement friendly design object and his creator is presented.",
      "skills": ["One Page", "Web design"],
      'figmaLink': 'https://www.figma.com/design/Cr5pwZu2O7ilInBK7Qr9m7/LANDRY_Roxanne_BetterDesignsOnePage?node-id=0-1&t=7EM33MOIYHd3Y5Zu-1'
    }
  }  
  const images = [
    "/Better/Better1.png",
    "/Better/Better4.mp4",
    "/Better/Better2.png"
  ];

  return <ProjectPage
  title={informations[language].title}
  description={informations[language].description}
  skills={informations[language].skills}
  images={images}
  figmaLink={informations[language].figmaLink} 
  prevProject="/projects/Ecomiam"
  nextProject="/projects/LesCheminsDeLaNature"
  />;
  
}

export default Better;
