import { useEffect, useState, useContext } from 'react';
import '../../main.css';
import './Presentation.css';
import { LanguageContext } from '../../context/LanguageContext';

function Presentation() {
  const [hasLoaded, setHasLoaded] = useState(false); // Gère l'activation de l'animation du texte après le chargement
  const { language, toggleLanguage } = useContext(LanguageContext); // language, toggleLanguage proviennent de LanguageContext

  const content = {
    fr: {
      greeting: 'Bonjour / Hi !',
      intro: `Moi c'est Roxanne, actuellement étudiante<br />
      en Design Graphique à Paris, je recherche<br />
      une <span class="purple">alternance</span> afin de me spécialiser en<br />
      <span class="purple">UI UX Design</span> dès septembre 2025.`,
      secondIntro: `Je suis convaincue de pouvoir me démarquer<br/>
      dans le milieu du design digital en utilisant mes<br/>
      compétences en Design Graphique apprises à<br/>
      Brassart et ma passion innée pour les technologies.<br/>
      J'apsire à apporter, non seulement des <span class="purple">interfaces<br/>
      esthétiques</span>, mais aussi des <span class="purple">expériences utilisateurs</span><br/>
      uniques.`,
      button: 'English pls',
      cv: 'Télécharger mon CV',
      linkedin: 'Mon LinkedIn',
    },
    en: {
      greeting: 'Hi / Bonjour !',
      intro: `My name is Roxanne, currently<br/>
      a Graphic Design student in Paris,<br/>
      I am looking for an <span class="purple">internship</span> in<br/>
      <span class="purple">UI/UX Design</span>, starting in<br/>
      September 2025.`,
      secondIntro: `I am convince that i can stand out<br/>
      in digital design thanks to my<br/>
      Graphic Design skills i learned in<br/>
      Brassart and also my forever<br/>
      passion for technologies. I aspire<br/>
      not only to bring <span class="purple">pleasant interfaces</span>,<br/>
      but also <span class="purple">user experiences</span> to life.`,
      button: 'Français',
      cv: 'Download my resume',
      linkedin: 'My LinkedIn',
    },
  };

  useEffect(() => {
    const langElement1 = document.getElementById("lang1");
    const langElement2 = document.getElementById("lang2");
  
    if (langElement1 && langElement2) {
      if (language === "fr") {
        langElement1.style.backgroundColor = "#fff6e6"; // beige
        langElement1.style.color = "#000000"; // violet
        langElement2.style.backgroundColor = "#000000"; // noir
        langElement2.style.color = "#fff6e6"; // blanc pour bien voir sur noir
      } else {
        langElement1.style.backgroundColor = "#000000"; // noir
        langElement1.style.color = "#fff6e6"; // blanc pour bien voir sur noir
        langElement2.style.backgroundColor = "#fff6e6"; // beige
        langElement2.style.color = "#000000"; // violet pour bien voir sur beige
      }
    }
  }, [language]);

  return (
    <>
      <section className='presentation-container'>
        <div className="lang-selection" id="about">
          <button onClick={language === "en" ? toggleLanguage : ''} className="lang-button" id="lang1">
            <span className="lang-button-text">Bonjour !</span>
          </button>
          <button onClick={language === "fr" ? toggleLanguage : ''} className="lang-button" id="lang2">
            <span className="lang-button-text">Hi !</span>
          </button>
        </div>
        <main className="homepage">
            {/* 
            <div className="lang-block">
              <h1 className="greetings">{content[language].greeting}</h1>
              <button onClick={toggleLanguage} className="lang-btn">
                <span className="button_top">{content[language].button}</span>
              </button>
            </div>
            */}

            <div className="paragraphs">
            <p
              className={hasLoaded ? 'fade-in paragraph-left' : 'paragraph-left'}
              dangerouslySetInnerHTML={{ __html: content[language].intro }}
            ></p>

            <p
              className="paragraph-right"
              dangerouslySetInnerHTML={{ __html: content[language].secondIntro }}
            ></p>
          </div>

            <div className="links">
              <div className="link">
                <a href="/portfolio/RoxanneLANDRYCVS.pdf" className="cv-link" download>
                  {content[language].cv}
                </a>
              </div>
              <div className="link">
                <a
                  href="https://www.linkedin.com/in/roxanne-landry-144976289/"
                  className="linkedin-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content[language].linkedin}
                </a>
              </div>
            </div>
        </main>
      </section>
    </>
  );
}

export default Presentation;
