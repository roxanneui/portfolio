import React, { useEffect, useState, useContext } from 'react';
import './Projects.css';
import ScrollGallery from './ScrollGallery';
import { LanguageContext } from '../../context/LanguageContext';

function Projects() {
  const [selectedProject, setSelectedProject] = useState('Ecomiam');
  const { language } = useContext(LanguageContext); // Pour obtenir la langue actuelle

  const projects = ['Ecomiam', 'GaiaCo', 'Better', 'WWWomen'];

  const galleryImages = {
    Ecomiam: [
      { url: '/portfolio/Ecomiam/Ecomiammockup2.1.png', title: '', id: 1 },
      { url: '/portfolio/Ecomiam/Ecomiam1.png', title: '', id: 2 },
      { url: '/portfolio/Ecomiam/EcomiamEva.png', title: '', id: 3 },
    ],
    GaiaCo: [
      { url: '/portfolio/GaiaCo/ProblemeSolution.png', title: '', id: 1 },
      { url: '/portfolio/GaiaCo/PersonaLaura.png', title: '', id: 2 },
      { url: '/portfolio/GaiaCo/Wire1.png', title: '', id: 3 },
    ],
    Better: [
      { url: '/portfolio/Better/Better1.png', title: '', id: 1 },
      { url: '/portfolio/Better/Better2.png', title: '', id: 2 },
      { url: '/portfolio/Better/Better3.png', title: '', id: 3 },
    ],
    WWWomen: [
      { url: '/portfolio/WWWomen/wwwomen3.png', title: '', id: 1 },
      { url: '/portfolio/WWWomen/wwwomen2.png', title: '', id: 2 },
      { url: '/portfolio/WWWomen/wwwomen1.png', title: '', id: 3 },
    ],
  };

  const projectDetails = {
    Ecomiam: {
      "fr": {
      "title": "Écomiam",
      "description": "Écomiam est une application éco-responsable qui lutte contre le gaspillage alimentaire en guidant l'utilisateur vers des points de ventes près de lui. Pour ce projet, j'ai pu creer des personas et réfléchir aux différents parcours utilisateur. J'ai également pu réaliser un wireframe, avant de designer l'interface finale sur figma.",
      "skills": ['Design Thinking', "Conception UI", "Travail d'équipe", 'Identité Visuelle'],
      "figmaLink": "https://www.figma.com/design/2PcsH4LwEKMOlqIeKyacye/MaquetteUXforGood--Copy-?node-id=0-1&t=3t14Vlg7HSfFlP6w-1",
    },
    "en": {
      "title": "Ecomiam",
      "description": "Ecomiam is a planet friendly app that fights against food waste by guiding the user to the stores near his location. For this project, i was able to create personas and think about the user journey. I was also able to work on wireframing, before designing the final interface on figma.",
      "skills": ['Design Thinking', "UI interface", "Group Work", 'Visual Identity',],
      "figmaLink": "https://www.figma.com/design/2PcsH4LwEKMOlqIeKyacye/MaquetteUXforGood--Copy-?node-id=0-1&t=3t14Vlg7HSfFlP6w-1"
    }
    },
    // Assure-toi que tous les projets sont bien définis pour chaque langue
    GaiaCo: {
      fr: {
        title: "GaiaCo — Application de gestion des relations",
        description: "Créer un espace personnel vivant, pour se souvenir des gens qu’on rencontre dans sa vie, voir les liens émerger, et revaloriser ses relations. GaiaCo permet de mieux comprendre son réseau personnel, d'explorer des opportunités et de maintenir des relations authentiques.",
        skills: ["Recherche UX", "Responsive Design", "Interface UI", "Data Visualization",],
        figmaLink: 'https://www.figma.com/design/Cr5pwZu2O7ilInBK7Qr9m7/LANDRY_Roxanne_GaiaCo?node-id=0-1&t=7EM33MOIYHd3Y5Zu-1',  
      },
      en: {
        title: "GaiaCo — Relationship Management App",
        description: "Create a personal living space to remember the people we meet in life, see the connections emerge, and revitalize relationships. GaiaCo helps you understand your personal network better, explore opportunities, and maintain authentic relationships.",
        skills: ["UX research", "Responsive Design", "Conception UI", "Data Visualization",],
        figmaLink: 'https://www.figma.com/design/Cr5pwZu2O7ilInBK7Qr9m7/LANDRY_Roxanne_GaiaCo?node-id=0-1&t=7EM33MOIYHd3Y5Zu-1',
        }
    },
    Better: {
      "fr": {
      "title": "Better Designs",
      "description": "Better Designs est un site web type blog où chaque semaine est présenté un objet de design éco-responsable et son histoire",
      "skills": ["One Page", "Conception UI"],
      'figmaLink': 'https://www.figma.com/design/Cr5pwZu2O7ilInBK7Qr9m7/LANDRY_Roxanne_BetterDesignsOnePage?node-id=0-1&t=7EM33MOIYHd3Y5Zu-1',
    },
    "en": {
      "title": "Better Designs",
      "description": "Better design is a web site who acts like a blog, where every week an environnement friendly design object and his creator is presented.",
      "skills": ["One Page", "UI design"],
      'figmaLink': 'https://www.figma.com/design/Cr5pwZu2O7ilInBK7Qr9m7/LANDRY_Roxanne_BetterDesignsOnePage?node-id=0-1&t=7EM33MOIYHd3Y5Zu-1'
    }
    },
    WWWomen: {
      "fr": {
        "title": "WWWomen",
        "description": "La mission : souligner et mettre en lumière les femmes à travers leur art, l'entrepreneuriat et bien d'autres sujets. WWWomen met en avant les femmes du monde entier de manière ludique et authentique, comme un blog à partager et une édition hebdomadaire à lire.",
        "skills": ['One page', "Conception UI", "Identité visuelle"],
      },
      "en": {
        "title": "WWWomen",
        "description": "Our mission : to highlight and recognize women through their their art, entrepreuneurship and many more. wwWomen shows to the world the feminin actuality with this one-page concept, like a blog with a new update every week.",
        "skills": ['One page', "UI design", "Visual Identity"],
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
  }, [selectedProject]);

  return (
    <div className="project-section">
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
        <h2>{projectDetails[selectedProject] && projectDetails[selectedProject][language]?.title}</h2>
        <p>{projectDetails[selectedProject] && projectDetails[selectedProject][language]?.description}</p>

        <div className="project-skills">
          <ul>
            {projectDetails[selectedProject] && projectDetails[selectedProject][language]?.skills?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="project-figma">
          <a href={projectDetails[selectedProject]?.[language]?.figmaLink} target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
      </div>

      <ScrollGallery images={galleryImages[selectedProject]} />
    </div>
  );
}

export default Projects;
