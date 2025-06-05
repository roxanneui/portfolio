import React, { useState } from 'react';
import './Projets.css';

const Projets = () => {
  const filters = ["UI UX", "Direction Artistique", "Design graphique"];
  const [selectedFilter, setSelectedFilter] = useState(null);

  const projects = [
    { title: "Écomiam", image: "#d9d9d9", tag: "UI UX" },
    { title: "GaiaCo", image: "#d9d9d9", tag: "Direction Artistique" },
    { title: "WWWomen", image: "#d9d9d9", tag: "Design graphique" },
    { title: "Michel et Colette", image: "#d9d9d9", tag: "UI UX" },
    { title: "Motif", image: "#d9d9d9", tag: "Direction Artistique" },
    { title: "Better", image: "#d9d9d9", tag: "Design graphique" },
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
          <div key={index} className="projet-card">
            <div 
              className="projet-image-placeholder" 
              style={{ backgroundColor: project.image }}
              aria-label={project.title}
            ></div>
            <p className="projet-title">{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
