import { useEffect, useState, useContext } from 'react';
import '../../main.css';
import './Presentation.css';
import { LanguageContext } from '../../context/LanguageContext';

function Presentation() {
  const { language, toggleLanguage } = useContext(LanguageContext); // language, toggleLanguage proviennent de LanguageContext

  const content = {
    fr: {
      introTitle: 'Qui suis-je ?',
      intro: `Du Canada à Paris, j'ai choisi de venir<br />
      me former en design dans des écoles<br />
      exigeantes et auprès d'équipes<br />
      inspirantes. Le design digital me<br />
      passionne parce qu'il mêle le<br />
      graphisme, l'utilité et les technologies<br />
      de demain. J'ai une vraie culture<br />
      visuelle, un goût pour les idées, et<br />
      l'envie de toujours mieux comprendre<br />
      les utilisateurs et leurs besoins.`,
      secondIntroTitle: 'Mon parcours',
      secondIntro: `Je commence ma spécialisation UI/UX<br/>
      design, et je cherche à passer à<br/>
      l'action. Fini les projets fictifs : je veux<br/>
      participer à des vrais projets, aux côtés<br/>
      de professionnels, pour apprendre sur<br/>
      le terrain. J'ai déjà acquis des bases<br/>
      solides (HTML, CSS, Figma, desgin<br/>
      thinking, prototypage), mais c'est dans<br/>
      la réalité que je veux affiner ma pratique.`,
      thirdIntroTitle: 'Mes objectifs',
      thirdIntro: `Ce que je cherche, c'est un cadre<br/>
      bienveillant mais exigeant, dans<br/>
      lequel je pourrais évoluer, poser des<br/>
      questions, apprendre de mes erreurs<br/>
      et progressser pas à pas. J'ai envie de<br/>
      construire des expériences utiles<br/>
      humaines, et d'évoluer avec des gens<br/>
      qui aiment ce qu'ils font.`,

      button: 'English pls',
      cv: 'Télécharger mon CV',
      linkedin: 'Mon LinkedIn',
    },
    en: {
      introTitle: 'Who am I?',
      intro: `From Canada to Paris, I chose to come<br />
      study graphic design in demanding<br />
      schools and along inspiring teams.<br />
      Digital designfascinates me because<br />
      it combines creativity, usefulness and<br />
      tomorrow's technologies. I have<br />
      a taste for innovation, and the<br />
      constant drive to better understand<br />
      technologies, the users and needs.`,
      secondIntroTitle: 'My background',
      secondIntro: `I am starting my UI/UX design<br />
      specialization, and I am ready to<br />
      take action. No more fictional<br />
      projects: I want to participate in<br />
      the real ones, alongside<br />
      professionals, to learn on the<br />
      ground. I have already acquired<br />
      solid foundations (HTML, CSS,<br />
      Figma, design thinking,<br />
      prototyping). but is in reality that<br />
      I want to refine my practice.`,
      thirdIntroTitle: 'My goals',
      thirdIntro: `What I am looking for is a supportive<br />
      yet challenging environment in which<br />
      I could evolve, ask questions, learn<br />
      from my mistakes and progress in<br />
      a team. I want to build useful and<br />
      human-centered experiences and<br />
      evolve with people who are<br />
      passionate about what they do.`,

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
