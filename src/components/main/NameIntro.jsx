import React from 'react';
import './NameIntro.css';
import { LanguageContext } from '../../context/LanguageContext';

function NameIntro() {
  const { language } = React.useContext(LanguageContext);

  const text = {
    fr: ['Roxanne', 'Landry', 'UI/UX design - Graphisme - Direction artistique', 'Mon univers créatif'],
    en: ['Roxanne', 'Landry', 'UI/UX design - Graphic Design - Art direction', 'My creative space'],
  };


  return (
    <div className="name-intro">
      <div className='name'>
        <h1>{text[language][0].toUpperCase()}</h1>
        <h1>{text[language][1].toUpperCase()}</h1>
      </div>
      <h2>{text[language][2]}</h2>
      <div className='discover'>
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
        <p>{text[language][3]}</p>
      </div>
    </div>
  );
}

export default NameIntro;
