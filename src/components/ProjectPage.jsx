import React, { useContext } from 'react';
import "./ProjectPage.css";
import Header from "./Header";
import Footer from "./Footer";
import { LanguageContext } from '../context/LanguageContext';
import arrowLeft from "../FlecheGauche.png";
import arrowRight from "../FlecheDroite.png";


export default function ProjectPage({ title, description, skills, images, figmaLink, prevProject, nextProject}) {
  console.log({ title, description, skills, images, figmaLink, prevProject, nextProject });


  const content = {
    fr: {
      figmaText: "Voir le projet sur Figma",
    },
    en: {
      figmaText: "View the project on Figma",
    },
  };

  return (
    <>
      <Header />
      <div className="project-page">
        <div className="left-column">
          <h1 className="project-title-size">{title}</h1>
          <p className="project-description">{description}</p>

          
          {/* {figmaLink && (
            <p className="figma-link">
              <a href={figmaLink} target="_blank" rel="noopener noreferrer">
                {content[language].figmaText}
              </a>
            </p>
          )} */}

          <div className="skill-pills">
            {skills.map((skill, index) => (
              <span key={index} className="pill">{skill}</span>
            ))}
          </div>
        </div>

        <div className="right-column">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Projet ${title} ${index + 1}`}
              className="project-image"
            />
          ))}
        </div>
      </div>
        
      <div className="project-navigation">
      <div className="project-navigation">
        {prevProject && (
          <a href={prevProject} className="nav-image-button nav-left">
            <img src={arrowLeft} alt="Projet précédent" />
          </a>
       )}
        {nextProject && (
          <a href={nextProject} className="nav-image-button nav-right">
            <img src={arrowRight} alt="Projet suivant" />
          </a>
        )}
      </div>

      </div>

      
      <Footer />
    </>
  );
}
