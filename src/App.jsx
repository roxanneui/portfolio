import { useEffect, useState, useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './main.css';
import { LanguageContext } from './context/LanguageContext';
import NameIntro from './components/NameIntro';
import EyeIntro from './components/EyeIntro';
import { Link } from 'react-router-dom';

function App() {
  const [hasLoaded, setHasLoaded] = useState(false); // Gère l'activation de l'animation du texte après le chargement
  const [isIntroDone, setIsIntroDone] = useState(false); // Ajout de l'état pour gérer la fin de l'intro
  const { language, toggleLanguage } = useContext(LanguageContext); // language, toggleLanguage proviennent de LanguageContext
  const [showHeader, setShowHeader] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null); // État pour gérer le projet survolé

  useEffect(() => {
    // Simuler la fin de l'écran de chargement
    const timer = setTimeout(() => {
      setHasLoaded(true); // Lancer l'animation après 3 secondes (ou après la fin de ton écran de chargement)
    }, 3000); // Ici, 3000ms = 3 secondes, ajuste en fonction de ton écran de chargement
    return () => clearTimeout(timer);
  }, []);

  const handleIntroEnd = () => {
    setIsIntroDone(true); // L'animation de l'intro est terminée
  };

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
      projects: '/Projets',
    },
    en: {
      greeting: 'Hi / Bonjour !',
      intro: `Currently studying Graphic Design<br/>
      in Paris, I'm looking for an internship<br/>
      in UI/UX Design, starting in September<br/>
      2025 and for a year, at the rate of 3 days<br/>
      working and 2 days at school, plus full<br/>
      time during school vacations.`,
      button: 'Français',
      cv: 'Download my resume',
      linkedin: 'My LinkedIn',
      projects: '/Projects',
    },
  };

  const projects = [

    { img: '/portfolio/Ecomiam/Ecomiammockup2.1.png', title: 'Ecomiam',
      tags: { fr: ['App Mobile', 'Environnement'], en: ['Mobile App', 'Environement'] },
      color: '#a41744', pageName: 'ecomiam' },

    { img: '/portfolio/LesCheminsDeLaNature/lCDLN1.png', title: 'Les Chemins de la Nature',
      tags: { fr: ['One Page Web', 'Environnement'], en: ['One Page Web', 'Environement'] },
      color: '#b4ce94', pageName: 'lescheminsdelanature' },

    { img: '/portfolio/WWWoman/wwwoman1.png', title: 'WWWoman',
      tags: { fr: ['One Page Web', 'Droits de femmes'], en: ['One Page Web', 'Woman rights'] },
      color: '#a41744', pageName: 'wwwoman'  },
  ];

  // useEffect(() => {
  //   if (hoveredProject !== null && projects[hoveredProject]?.color) {
  //     document.querySelector('.project-section').style.backgroundColor = projects[hoveredProject].color;
  //     document.querySelector('.projects').style.backgroundColor = projects[hoveredProject].color;
  //   } else {
  //     document.querySelector('.project-section').style.backgroundColor = '#000';
  //     document.querySelector('.projects').style.backgroundColor = '#000';
  //   }
  // }, [hoveredProject]);

  return (
    <>
      <Header showHeader={showHeader} />
      <NameIntro />
      <main className="homepage">
        
          <>
            <div className="lang-block">
              <h1 className={hasLoaded ? 'fade-in' : ''}>{content[language].greeting}</h1>
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
                <a href="/portfolio/RoxanneLANDRYCV.pdf" className="cv-link" download>
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
          </>
      </main>


      <div className="project-section">
        <div className="project-section-title">
          {content[language].projects}
          <span className="blinking-cursor"> |</span>
        </div>
        <section className="projects">
          {projects.map((proj, i) => (
            <div className="project" key={i}>
              <Link to={`/projects/${proj.pageName}`}>
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="project-image"
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                />
              </Link>
              <div className="project-title">{proj.title}</div>
              {proj.tags && proj.tags[language] && (
                <div className="project-tags">
                  {proj.tags[language].map((tag, index) => (
                    <span
                      key={index}
                      className="project-tag"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>

      <Footer />
      {/* <EyeIntro onIntroEnd={handleIntroEnd} /> Passer la fonction ici */}
    </>
  );
}

export default App;
