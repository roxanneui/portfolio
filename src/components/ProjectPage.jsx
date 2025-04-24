import React, { useContext } from 'react';
import "./ProjectPage.css";
import Header from "./Header";
import Footer from "./Footer";
import { LanguageContext } from '../context/LanguageContext';
import arrowLeft from "../FlecheGauche.png";
import arrowRight from "../FlecheDroite.png";
import { Link } from 'react-router-dom';

export default function ProjectPage({ title, description, skills, images, figmaLink, prevProject, nextProject}) {
  console.log({ title, description, skills, images, figmaLink, prevProject, nextProject });
  const { language } = useContext(LanguageContext);

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
          <div className="skill-pills">
            {skills.map((skill, index) => (
              <span key={index} className="pill">{skill}</span>
            ))}
          </div>
        </div>

        <div className="right-column">
          {images.map((image, index) => {
            image = `/portfolio${image}`;
            if (image.endsWith('.png') || image.endsWith('.jpg') || image.endsWith('.jpeg')) {
              return (
                <img
                  key={index}
                  src={image}
                  alt={`Projet ${title} ${index + 1}`}
                  className="project-image"
                />
              );
            } else if (image.endsWith('.mp4')) {
              return (
                <video
                  key={index}
                  src={image}
                  className="project-video"
                  autoPlay
                  loop
                  muted
                >
                  Your browser does not support the video tag.
                </video>
              );
            }
            return null;
          })}
          {figmaLink && (
            <p className="figma-link">
              <Link to={figmaLink} target="_blank" rel="noopener noreferrer">
                {content[language].figmaText}
              </Link>
            </p>
          )}
        </div>

      </div>
        
      <div className="project-navigation">
        {prevProject && (
          <Link to={prevProject} className="nav-image-button nav-left">
            <img src={arrowLeft} alt="Projet précédent" />
          </Link>
        )}
        {nextProject && (
          <Link to={nextProject} className="nav-image-button nav-right">
            <img src={arrowRight} alt="Projet suivant" />
          </Link>
        )}
      </div>

      
      <Footer />
    </>
  );
}