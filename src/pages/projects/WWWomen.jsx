import React, { useContext } from "react";
import ProjectPage from "../../components/ProjectPage";
import { LanguageContext } from '../../context/LanguageContext';

function Better() {
  const { language } = useContext(LanguageContext);
  const informations =
  {
    "fr": {
      "title": "WWWomen",
      "description": "La mission : souligner et mettre en lumière les femmes à travers leur art, l'entrepreneuriat et bien d'autres sujets. WWWomen met en avant les femmes du monde entier de manière ludique et authentique, comme un blog à partager et une édition hebdomadaire à lire.",
      "skills": ["Concept", "Conception UI", "Identité visuelle"],
    },
    "en": {
      "title": "WWWomen",
      "description": "Our mission : to highlight and recognize women through their their art, entrepreuneurship and many more. wwWomen shows to the world the feminin actuality with this one-page concept, like a blog with a new update every week.",
      "skills": ["Concept", "UI design", "Visual Identity"],
    }
  }  
  const images = [
    "/WWWomen/wwwomen1.png",
    "/WWWomen/wwwomen2.png"
  ];

  return <ProjectPage
  title={informations[language].title}
  description={informations[language].description}
  skills={informations[language].skills}
  images={images} />;
}

export default Better;