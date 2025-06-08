import React, { useState } from 'react';
import './Projets.css';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from "../context/LanguageContext.jsx";

const translations = {
  fr: {
    filters: ["UI UX", "Direction Artistique", "Design graphique"],
    allProjects: "Tous les projets",
    projects: [
      { title: "Écomiam" },
      { title: "GaiaCo" },
      { title: "WWWomen" },
      { title: "Michel et Colette" },
      { title: "Motif" },
      { title: "Better" },
    ]
  },
  en: {
    filters: ["UI UX", "Art Direction", "Graphic Design"],
    allProjects: "All projects",
    projects: [
      { title: "Ecomiam" },
      { title: "GaiaCo" },
      { title: "WWWomen" },
      { title: "Michel and Colette" },
      { title: "Pattern" },
      { title: "Better" },
    ]
  }
};

const Projets = () => {
  const { language } = useLanguage();
  const filters = translations[language]?.filters || translations.fr.filters;
  const allProjectsLabel = translations[language]?.allProjects || translations.fr.allProjects;
  const projectTitles = translations[language]?.projects || translations.fr.projects;
  const [selectedFilter, setSelectedFilter] = useState(null);
  const navigate = useNavigate();

  const projects = [
    { image: "./Ecomiam/Ecomiammockup2.1.png", tag: "UI UX", page: "ecomiam" },
    { image: "./GaiaCo/Logo.png", tag: "UI UX", page: "gaiaco" },
    { image: "./WWWomen/wwwomen.png", tag: "UI UX", page: "wwwomen" },
    { image: "./MichelEtColette/CharteLogo.png", tag: "Direction Artistique", page: "micheletcolette" },
    { image: "./Motif/Motif.png", tag: "Design Graphique", page: "motif" },
    { image: "./Better/Better1.png", tag: "UI UX", page: "better" },
  ];

  const filteredProjects = selectedFilter
    ? projects.filter(project => project.tag === selectedFilter)
    : projects;

  return (
    <div className="projets-container">
      <div className="projets-filters">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`filter-button ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
        <button
          className={`filter-button ${selectedFilter === null ? 'active' : ''}`}
          onClick={() => setSelectedFilter(null)}
        >
          {allProjectsLabel}
        </button>
      </div>

      {/* Projects Grid Section */}
      <div className="projets-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="projet-card"
            onClick={() => {
              if (project.page) {
                navigate(`/projets/${project.page}`);
              }
            }}
            style={{ cursor: project.page ? 'pointer' : 'default' }}
          >
            <div 
              className="projet-image-placeholder" 
              style={{ backgroundColor: project.image }}
              aria-label={projectTitles[index]?.title || ''}
            >
              <img
                src={project.image}
                alt={projectTitles[index]?.title || ''}
                className="projet-image"
              />
            </div>
            <p className="projet-title">{projectTitles[index]?.title || ''}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
