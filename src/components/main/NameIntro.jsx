import React from 'react';
import './NameIntro.css';

function NameIntro() {
  return (
    <div className="name-intro">
        <div className="image-container">
            <img 
              src="./imageintro.png" // Remplace par le chemin de ton image
              alt="" 
              className="intro-image" 
            />
          </div>
      <div className="name-intro-content">
        <span className="name">Roxanne Landry</span>
        <img
          src="/portfolio/Fleche1.png"
          alt="Scroll Down"
          className="scroll-arrow"
          onMouseEnter={(e) => {
            e.target.style.cursor = "pointer";
          }}
          onClick={() => {
            const section = document.getElementById("about");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </div>
  );
}

export default NameIntro;
