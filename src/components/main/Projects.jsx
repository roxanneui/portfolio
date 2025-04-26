import React, { useContext } from 'react';
import './Projects.css';
import { LanguageContext } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

function Projects() {
  const { language } = useContext(LanguageContext); // language, toggleLanguage proviennent de LanguageContext

  const content = {
    fr: {
      projects: '/Projets UI UX',
      allProjects: 'Voir tous mes projets',
    },
    en: {
      projects: '/UI UX Projects',
      allProjects: 'See all my projects',
    },
  };

  const projects = [

    { img: '/portfolio/Ecomiam/Ecomiammockup2.1.png', title: 'Ecomiam',
      tags: { fr: ['App Mobile', 'Environnement'], en: ['Mobile App', 'Environement'] },
      color: '#a41744', pageName: 'ecomiam' },
      
    { img: '/portfolio/WWWomen/wwwomen3.png', title: 'WWWomen',
      tags: { fr: ['One Page Web', 'Droits des femmes'], en: ['One Page Web', 'Women rights'] },
      color: '#a41744', pageName: 'wwwomen'  },

    { img: '/portfolio/Better/Better1.png', title: 'Better Designs',
      tags: { fr: ['One Page Web', 'Environnement'], en: ['One Page Web', 'Environement'] },
      color: '#b4ce94', pageName: 'Better' },
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
      <div id='projects' className="project-section">
        <div className="project-section-title">
          {content[language].projects}
          <span className="blinking-cursor"> |</span>
        </div>
        <section className="projects">
          {projects.map((proj, i) => (
            <div className="project" key={i}>
              <Link to={`/projects/${proj.pageName}`}>
                <div className="image-container">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="project-image"
                    onMouseEnter={() => setHoveredProject(i)}
                    onMouseLeave={() => setHoveredProject(null)}
                  />
                  <div className="project-title">{proj.title}</div>
                </div>
              </Link>
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
        <div className="see-all-projects">
          <Link to="/carnet" className="all-projects">
            {content[language].allProjects}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;
