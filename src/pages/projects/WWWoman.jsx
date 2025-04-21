import React, { useContext } from "react";
import ProjectPage from "../../components/ProjectPage";
import { LanguageContext } from '../../context/LanguageContext';

function Better() {
  const { language } = useContext(LanguageContext);
  const informations =
  {
    "fr": {
      "title": "Better",
      "description": "Better est une application conçue pour favoriser la gestion de sa santé mentale via des rituels positifs, un journal personnel, et des exercices interactifs.",
      "skills": ["Identité visuelle", "UI/UX Design", "Illustration"]
    },
    "en": {
      "title": "Better",
      "description": "Better is an app designed to support mental health management through positive rituals, a personal journal, and interactive exercises.",
      "skills": ["Visual identity", "UI/UX Design", "Illustration"]
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
  images={images} />;
}

export default Better;