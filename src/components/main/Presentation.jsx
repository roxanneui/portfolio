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
      intro: `Actuellement étudiante en design<br />
      graphique à Paris, je recherche une<br />
      alternance afin de me spécialiser<br />
      en UI UX Design dès septembre,<br/>
      au rythme de 3 jours en entreprise<br/>
      et 2 jours en formation et temps<br/>
      plein pendant les vacances scolaires.`,
      button: 'English pls',
      cv: 'Télécharger mon CV',
      linkedin: 'Mon LinkedIn',
    },
    en: {
      greeting: 'Hi / Bonjour !',
      intro: `Currently studying Graphic Design<br/>
      in Paris, I'm looking for an internship<br/>
      in UI/UX Design, starting in September<br/>
      2025 and for a year, at the rate of<br/>
      3 days working and 2 days at school,<br/>
      plus full time during school vacations.`,
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

            <p
              className={hasLoaded ? 'fade-in' : ''}
              dangerouslySetInnerHTML={{ __html: content[language].intro }}
            ></p>

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
