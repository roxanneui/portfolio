import React, { useState } from 'react';
import './Projets.css';
import { Link, useNavigate } from 'react-router-dom';

const Projets = () => {
  const filters = ["UI UX", "Direction Artistique", "Design graphique"];
  const [selectedFilter, setSelectedFilter] = useState(null);
  const navigate = useNavigate();

  const projects = [
    { title: "Écomiam", image: "./Ecomiam/Ecomiammockup2.1.png", tag: "UI UX", page: "ecomiam" },
    { title: "GaiaCo", image: "./GaiaCo/Logo.png", tag: "UI UX", page: "wwwomen" },
    { title: "WWWomen", image: "./WWWomen/wwwomen.png", tag: "UI UX", page: "wwwomen" },
    { title: "Michel et Colette", image: "./MichelEtColette/PackRouge2.png", tag: "Direction Artistique", page: "" },
    { title: "Motif", image: "./Motif/Motif.png", tag: "Design Graphique", page: "" },
    { title: "Better", image: "#d9d9d9", tag: "UI UX", page: "" },
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
          Tous les projets
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
              aria-label={project.title}
            >
              <img
                src={project.image}
                alt={project.title}
                className="projet-image"
              />
            </div>
            <p className="projet-title">{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
