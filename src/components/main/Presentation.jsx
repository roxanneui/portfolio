import { useEffect, useState, useContext } from 'react';
import '../../main.css';
import './Presentation.css';
import { LanguageContext } from '../../context/LanguageContext';

function Presentation() {
  const { language, toggleLanguage } = useContext(LanguageContext); // language, toggleLanguage proviennent de LanguageContext

  const content = {
    fr: {
      introTitle: 'Qui suis-je ?',
      intro: `Passionée par les technologies et<br />
      les arts visuels, j'ai commencé mon<br />
      parcours en design graphique à<br />
      Brassart, où j'ai appris à donner<br />
      forme aux idées et à explorer<br />
      la direction artistique. Aujourd'hui,<br />
      je me spécialise en UI/UX à Itecom<br />
      pour allier design et expérience<br />
      utilisateur. Curieuse et investie,<br />
      j'aime tester et comprendre les outils<br />
      digitaux et réfléchir à l'application<br />
      du design dans notre quotidien digital.<br />
      Je suis prête à mettre mes<br />
      compétences et ma créativité au<br />
      service de projets concrets et à<br />
      progresser dans une équipe de<br />
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
      intro: `Passionate about technology and<br />
      visual arts, I began my journey in<br />
      graphic design at Brassart, where I<br />
      learned to bring ideas to life and<br />
      explore art direction. Today, I'm<br />
      specializing in UI/UX at Itecom to<br />
      combine design with user experience.<br />
      Curious and dedicated, I enjoy testing<br />
      and understanding digital tools and<br />
      thinking about how design applies to<br />
      our digital daily lives. I'm ready to put<br />
      my skills and creativity into the real-<br />
      world projects and grow within a <br />
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
