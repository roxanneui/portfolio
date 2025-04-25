import React from 'react';
import './NameIntro.css';

function NameIntro() {
  return (
    <div className="name-intro">
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
