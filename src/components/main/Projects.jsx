import React, { useContext, useEffect, useState } from 'react';
import './Projects.css';
import { LanguageContext } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

function Projects() {
  const { language } = useContext(LanguageContext); // language, toggleLanguage proviennent de LanguageContext
  const [selectedProject, setSelectedProject] = useState(1);

  const content = {
    fr: {
      webProjects: 'Projets Web',
      otherProjects: 'Autres projets',
      allProjects: 'Autres créations',
    },
    en: {
      webProjects: 'Web Projects',
      otherProjects: 'Other projects',
      allProjects: 'Other creations',
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

  useEffect(() => {
    const projectsElement1 = document.getElementById("projects1");
    const projectsElement2 = document.getElementById("projects2");
    if (projectsElement1 && projectsElement2) {
      if (selectedProject === 1) {
        projectsElement1.style.backgroundColor = "#000000";
        projectsElement1.style.color = "#fff6e6";
        projectsElement2.style.backgroundColor = "#9747FF";
        projectsElement2.style.color = "#000000";
      } else {
        projectsElement1.style.backgroundColor = "#9747FF";
        projectsElement1.style.color = "#000000";
        projectsElement2.style.backgroundColor = "#000000";
        projectsElement2.style.color = "#fff6e6";
      }
    }
  }, [selectedProject]);

  return (
    <>
      <div id='projects' className="project-section">
        <div className="projects-selection" id="about">
          <button onClick={() => setSelectedProject(1)} className="projects-button" id="projects1">
            <span className="projects-button-text">{content[language].webProjects}</span>
          </button>
          <button onClick={() => setSelectedProject(2)} className="projects-button" id="projects2">
            <span className="projects-button-text">{content[language].otherProjects}</span>
          </button>
        </div>
        {/* <div className="project-section-title">
          {content[language].projects}
          <span className="blinking-cursor"> |</span>
        </div> */}
        <section className="projects">
          {selectedProject === 1 && projects.map((proj, i) => (
            <div className="project" key={i}>
              <Link to={`/projects/${proj.pageName}`}>
                <div className="image-container">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="project-image"
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
          <Link to="/creations" className="all-projects">
            {content[language].allProjects}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;
