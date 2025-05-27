import React, { useEffect, useState, useContext } from 'react';
import './Projects.css';
import ScrollGallery from './ScrollGallery';
import { LanguageContext } from '../../context/LanguageContext';
import ProjectAccordion from './ProjectAccordion';

function Projects() {
  const [selectedProject, setSelectedProject] = useState('Ecomiam');
  const { language } = useContext(LanguageContext);

  const projects = ['Ecomiam', 'GaiaCo', 'Better', 'WWWomen'];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const figmaLink = {
    en: "View figma",
    fr: "Voir le figma"
  };

  const projectDetails = {
    Ecomiam: {
      images: [
        { url: '/portfolio/Ecomiam/Ecomiammockup2.1.png', title: '', id: 1 },
        { url: '/portfolio/Ecomiam/Ecomiam1.png', title: '', id: 2 },
        { url: '/portfolio/Ecomiam/EcomiamEva.png', title: '', id: 3 },
        { url: '/portfolio/Ecomiam/Ecomiam3.png', title: '', id: 4 },
      ],
      fr: {
        title: "Écomiam",
        description: "Écomiam est une application éco-responsable qui lutte contre le gaspillage alimentaire en guidant l'utilisateur vers des points de ventes près de lui. Pour ce projet, j'ai pu creer des personas et réfléchir aux différents parcours utilisateur. J'ai également pu réaliser un wireframe, avant de designer l'interface finale sur figma.",
        skills: ['Design Thinking', "Conception UI", "Travail d'équipe", 'Identité Visuelle'],
        figmaLink: "https://www.figma.com/design/2PcsH4LwEKMOlqIeKyacye/MaquetteUXforGood--Copy-?node-id=0-1&t=3t14Vlg7HSfFlP6w-1",
      },
      en: {
        title: "Ecomiam",
        description: "Ecomiam is a planet friendly app that fights against food waste by guiding the user to the stores near his location. For this project, i was able to create personas and think about the user journey. I was also able to work on wireframing, before designing the final interface on figma.",
        skills: ['Design Thinking', "UI interface", "Group Work", 'Visual Identity'],
        figmaLink: "https://www.figma.com/design/2PcsH4LwEKMOlqIeKyacye/MaquetteUXforGood--Copy-?node-id=0-1&t=3t14Vlg7HSfFlP6w-1"
      }
    },
    GaiaCo: {
      images: [
        { url: '/portfolio/GaiaCo/Logo.png', title: '', id: 1 },
        { url: '/portfolio/GaiaCo/ProblemeSolution.png', title: '', id: 2 },
        { url: '/portfolio/GaiaCo/PersonaLaura.png', title: '', id: 3 },
        { url: '/portfolio/GaiaCo/Wire1.png', title: '', id: 4 },
      ],
      fr: {
        title: "GaiaCo",
        description: "Créer un espace personnel vivant, pour se souvenir des gens qu’on rencontre dans sa vie, voir les liens émerger, et revaloriser ses relations. GaiaCo permet de mieux comprendre son réseau personnel, d'explorer des opportunités et de maintenir des relations authentiques.",
        skills: ["Recherche UX", "Responsive Design", "Interface UI", "Data Visualization"],
      },
      en: {
        title: "GaiaCo",
        description: "Create a personal living space to remember the people we meet in life, see the connections emerge, and revitalize relationships. GaiaCo helps you understand your personal network better, explore opportunities, and maintain authentic relationships.",
        skills: ["UX research", "Responsive Design", "Conception UI", "Data Visualization"],
      }
    },
    Better: {
      images: [
        { url: '/portfolio/Better/Better1.png', title: '', id: 1 },
        { url: '/portfolio/Better/Better5.png', title: '', id: 2 },
        { url: '/portfolio/Better/Better4.mp4', title: '', id: 3 },
      ],
      fr: {
        title: "Better Designs",
        description: "Better Designs est un site web type blog où chaque semaine est présenté un objet de design éco-responsable et son histoire",
        skills: ["One Page", "Conception UI"],
        figmaLink: 'https://www.figma.com/design/Cr5pwZu2O7ilInBK7Qr9m7/LANDRY_Roxanne_BetterDesignsOnePage?node-id=0-1&t=7EM33MOIYHd3Y5Zu-1',
      },
      en: {
        title: "Better Designs",
        description: "Better design is a web site who acts like a blog, where every week an environnement friendly design object and his creator is presented.",
        skills: ["One Page", "UI design"],
        figmaLink: 'https://www.figma.com/design/Cr5pwZu2O7ilInBK7Qr9m7/LANDRY_Roxanne_BetterDesignsOnePage?node-id=0-1&t=7EM33MOIYHd3Y5Zu-1'
      }
    },
    WWWomen: {
      images: [
        { url: '/portfolio/WWWomen/wwwomen4.png', title: '', id: 1 },
        { url: '/portfolio/WWWomen/wwwomen3.png', title: '', id: 2 },
        { url: '/portfolio/WWWomen/wwwomen1.png', title: '', id: 3 },
      ],
      fr: {
        title: "WWWomen",
        description: "La mission : souligner et mettre en lumière les femmes à travers leur art, l'entrepreneuriat et bien d'autres sujets. WWWomen met en avant les femmes du monde entier de manière ludique et authentique, comme un blog à partager et une édition hebdomadaire à lire.",
        skills: ['One page', "Conception UI", "Identité visuelle"],
      },
      en: {
        title: "WWWomen",
        description: "Our mission : to highlight and recognize women through their their art, entrepreuneurship and many more. wwWomen shows to the world the feminin actuality with this one-page concept, like a blog with a new update every week.",
        skills: ['One page', "UI design", "Visual Identity"],
      }
    }
  };

  useEffect(() => {
    projects.forEach((name) => {
      const el = document.getElementById(`projects-${name}`);
      if (el) {
        if (name === selectedProject) {
          el.style.backgroundColor = "#000000";
          el.style.color = "#fff6e6";
        } else {
          el.style.backgroundColor = "#9747FF";
          el.style.color = "#000000";
        }
      }
    });
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedProject]);

  return (
    <div className="project-section">
      {isMobile ? (
        <div style={{ paddingBottom: '5rem' }}>
          {Object.entries(projectDetails).map(([projectKey, projectData], idx) => (
            <ProjectAccordion
              key={idx}
              title={projectData[language].title}
              bgColor={idx % 2 === 0 ? '#000000' : '#9747FF'}
            >
              <p>{projectData[language].description}</p>
              <ul>
                <div
                  className="project-skill-pills"
                  style={{ marginBottom: '1rem', paddingLeft: '1rem' }}
                >
                  {projectDetails[selectedProject] &&
                    projectDetails[selectedProject][language]?.skills?.map((skill, index) => (
                      <span key={index} className="project-pill">{skill}</span>
                    ))}
                </div>
              </ul>
              <div className="project-images">
                {projectData.images.length > 0 && (
                  <div className="main-image-container">
                    {projectData.images[0].url.endsWith('.mp4') ? (
                      <video autoPlay loop muted className="main-media">
                        <source src={projectData.images[0].url} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={projectData.images[0].url}
                        alt={projectData.images[0].title || projectData[language].title}
                        className="main-media"
                      />
                    )}
                  </div>
                )}

                {projectData.images.length > 1 && (
                  <div className="image-strip">
                    {projectData.images.slice(1).map((img) => (
                      <div key={img.id} className="strip-item">
                        {img.url.endsWith('.mp4') ? (
                          <video autoPlay loop muted className="strip-media">
                            <source src={img.url} type="video/mp4" />
                          </video>
                        ) : (
                          <img
                            src={img.url}
                            alt={img.title || projectData[language].title}
                            className="strip-media"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {projectData[language].figmaLink && (
                <div>
                  <a
                    href={projectData[language].figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {figmaLink[language]}
                  </a>
                </div>
              )}
            </ProjectAccordion>
          ))}
        </div>
      ) : (
        <>
          <div className="projects-selection" id="projects">
            {projects.map((name) => (
              <button
                key={name}
                onClick={() => setSelectedProject(name)}
                className="projects-button"
                id={`projects-${name}`}
              >
                <span className="projects-button-text">{name}</span>
              </button>
            ))}
          </div>

          <div className="project-info">
            <h2>
              {projectDetails[selectedProject] &&
                projectDetails[selectedProject][language]?.title}
            </h2>
            <p>
              {projectDetails[selectedProject] &&
                projectDetails[selectedProject][language]?.description}
            </p>

            <div className="project-specifications">
              <div className="project-skill-pills">
                {projectDetails[selectedProject] &&
                  projectDetails[selectedProject][language]?.skills?.map((skill, index) => (
                    <span key={index} className="project-pill">{skill}</span>
                  ))}
              </div>

              {projectDetails[selectedProject]?.[language]?.figmaLink && (
                <div className="project-figma">
                  <a
                    href={projectDetails[selectedProject][language].figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {figmaLink[language]}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="main-image-container">
            {projectDetails[selectedProject].images[0].url.endsWith('.mp4') ? (
              <video autoPlay loop muted className="main-image">
                <source src={projectDetails[selectedProject].images[0].url} type="video/mp4" />
              </video>
            ) : (
              <img
                src={projectDetails[selectedProject].images[0].url}
                alt="Main visual"
                className="main-image"
              />
            )}
          </div>

          <ScrollGallery images={projectDetails[selectedProject].images} />
        </>
      )}
    </div>
  );
}

export default Projects;