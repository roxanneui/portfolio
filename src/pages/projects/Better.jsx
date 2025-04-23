import React, { useContext } from "react";
import ProjectPage from "../../components/ProjectPage";
import { LanguageContext } from '../../context/LanguageContext';

function Better() {

  const { language } = useContext(LanguageContext);
  const informations =
  {
    "fr": {
      "title": "Better",
      "description": "Better est une marque de boissons énergisantes qui propose des boissons romantiques à déguster à plusieurs.",
      "skills": ["Identité visuelle", "Stratégie Créative", "Packaging"]
    },
    "en": {
      "title": "Better",
      "description": ".",
      "skills": ["Visual identity", "Creative Strategy", "Packaging"]
    }
  }  
  const images = [
    "/Better/Better1.png",
    "/Better/better2.png",
    "/Better/better3.png"
  ];

  return <ProjectPage
  title={informations[language].title}
  description={informations[language].description}
  skills={informations[language].skills}
  images={images} 
  prevProject="/projects/Ecomiam"
  nextProject="/projects/LesCheminsDeLaNature"
  />;
  
}

export default Better;