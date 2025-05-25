import { useEffect, useState, useContext } from 'react';
import '../../main.css';
import './Presentation.css';
import { LanguageContext } from '../../context/LanguageContext';

function Presentation() {
  const { language, toggleLanguage } = useContext(LanguageContext); // language, toggleLanguage proviennent de LanguageContext

  const content = {
    fr: {
      introTitle: 'Qui suis-je ?',
      intro: `Passionée par les technologies et
      les arts visuels, j'ai commencé mon
      parcours en design graphique à
      Brassart, où j'ai appris à donner
      forme aux idées et à explorer
      la direction artistique. Aujourd'hui,
      je me spécialise en UI/UX à Itecom
      pour allier design et expérience
      utilisateur. Curieuse et investie,
      j'aime tester et comprendre les outils
      digitaux et réfléchir à l'application
      du design dans notre quotidien digital.
      Je suis prête à mettre mes
      compétences et ma créativité au
      service de projets concrets et à
      progresser dans une équipe de
      professionels passionés.`,
      secondIntroTitle: '',
      secondIntro: ``,
      thirdIntroTitle: '',
      thirdIntro: ``,

      button: 'English pls',
      cv: 'Télécharger mon CV',
      linkedin: 'Mon LinkedIn',
    },
    en: {
      introTitle: 'Who am I?',
      intro: `Passionate about technology and
      visual arts, I began my journey in
      graphic design at Brassart, where I
      learned to bring ideas to life and
      explore art direction. Today, I'm
      specializing in UI/UX at Itecom to
      combine design with user experience.
      Curious and dedicated, I enjoy testing
      and understanding digital tools and
      thinking about how design applies to
      our digital daily lives. I'm ready to put
      my skills and creativity into the real-
      world projects and grow within a 
      team of passionate professionals.`,
      secondIntroTitle: '',
      secondIntro: `.`,
      thirdIntroTitle: '',
      thirdIntro: ``,

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
          <button onClick={language === "en" ? toggleLanguage : undefined} className="lang-button" id="lang1">
            <span className="lang-button-text">Bonjour !</span>
          </button>
          <button onClick={language === "fr" ? toggleLanguage : undefined} className="lang-button" id="lang2">
            <span className="lang-button-text">Hi !</span>
          </button>
        </div>
        <main className="homepage">

          <div className="paragraphs">
            
            <div>
              <h2 className="paragraph-title purple" style={{ textAlign: 'left' }}>{content[language].introTitle.toUpperCase()}</h2>
              <p
                className="paragraph-left"
                dangerouslySetInnerHTML={{ __html: content[language].intro }}
              ></p>
            </div>

            <div>
              <h2 className="paragraph-title purple" style={{ textAlign: 'right' }}>{content[language].secondIntroTitle.toUpperCase()}</h2>
              <p
                className="paragraph-right"
                dangerouslySetInnerHTML={{ __html: content[language].secondIntro }}
              ></p>
            </div>

            <div>
              <h2 className="paragraph-title purple" style={{ textAlign: 'left' }}>{content[language].thirdIntroTitle.toUpperCase()}</h2>
              <p
                className='paragraph-left'
                dangerouslySetInnerHTML={{ __html: content[language].thirdIntro }}
              ></p>
            </div>
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
