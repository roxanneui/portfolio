import { useEffect, useState, useContext } from 'react';
import '../../main.css';
import './Presentation.css';
import { LanguageContext } from '../../context/LanguageContext';

function Presentation() {
  const [hasLoaded, setHasLoaded] = useState(false); // Gère l'activation de l'animation du texte après le chargement
  const { language, toggleLanguage } = useContext(LanguageContext); // language, toggleLanguage proviennent de LanguageContext

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    fr: {
      greeting: 'Bonjour / Hi !',
      intro: `Moi c'est Roxanne, actuellement étudiante<br />
      en Design Graphique à Paris, je recherche<br />
      une alternance afin de me spécialiser en<br />
      UI UX Design dès septembre 2025.`,
      secondIntro: `Je suis convaincue de pouvoir me démarquer<br/>
      dans le milieu du design digital en utilisant mes<br/>
      compétences en Design Graphique apprises à<br/>
      Brassart et ma passion innée pour les technologies.<br/>
      J'apsire à apporter, non seulement des interfaces<br/>
      esthétiques, mais aussi des expériences utilisateurs<br/>
      uniques.`,
      button: 'English pls',
      cv: 'Télécharger mon CV',
      linkedin: 'Mon LinkedIn',
    },
    en: {
      greeting: 'Hi / Bonjour !',
      intro: `My name is Roxanne, currently<br/>
      a Graphic Design student in Paris,<br/>
      I am looking for an internship in<br/>
      UI/UX Design, starting in<br/>
      September 2025.`,
      secondIntro: `I am convince that i can stand out<br/>
      in digital design thanks to my<br/>
      Graphic Design skills i learned in<br/>
      Brassart and also my forever<br/>
      passion for technologies. I aspire<br/>
      not only to bring pleasant interfaces,<br/>
      but also user experiences to life.`,
      button: 'Français',
      cv: 'Download my resume',
      linkedin: 'My LinkedIn',
    },
  };

  return (
    <>
      <section id="about" className='presentation-container'>
        <main className="homepage">
            <div className="lang-block">
              <h1 className="greetings">{content[language].greeting}</h1>
              <button onClick={toggleLanguage} className="lang-btn">
                <span className="button_top">{content[language].button}</span>
              </button>
            </div>

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
