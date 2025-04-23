import React from "react";
import "./ProjectPage.css";
import Header from "./Header";
import Footer from "./Footer";

export default function ProjectPage({ title, description, skills, images, figmaLink }) {
  return (
    <>
      <Header />
      <div className="project-page">
        <div className="left-column">
          <h1 className="project-title">{title}</h1>
          <p className="project-description">{description}</p>

          {/* Étape 3 : Lien Figma */}
          {figmaLink && (
            <p className="figma-link">
              <a href={figmaLink} target="_blank" rel="noopener noreferrer">
                Voir le projet sur Figma
              </a>
            </p>
          )}

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
      
      <Footer />
    </>
  );
}
