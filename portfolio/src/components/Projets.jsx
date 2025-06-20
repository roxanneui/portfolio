import React, { useState } from "react";
import "./Projets.css";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

const translations = {
  fr: {
    filters: [
      { key: "uiux", label: "UI UX" },
      { key: "artDirection", label: "Direction Artistique" },
      { key: "graphicDesign", label: "Design graphique" },
    ],
    allProjects: "Tous les projets",
    projectTitles: {
      ecomiam: "Écomiam",
      gaiaco: "GaiaCo",
      wwwomen: "WWWomen",
      micheletcolette: "Michel et Colette",
      motif: "Motif",
      better: "Better",
      sockmates: 'Sockmates',
    },
  },
  en: {
    filters: [
      { key: "uiux", label: "UI UX" },
      { key: "artDirection", label: "Art Direction" },
      { key: "graphicDesign", label: "Graphic Design" },
    ],
    allProjects: "All projects",
    projectTitles: {
      ecomiam: "Ecomiam",
      gaiaco: "GaiaCo",
      wwwomen: "WWWomen",
      micheletcolette: "Michel and Colette",
      motif: "Pattern",
      better: "Better",
      sockmates: 'Sockmates',
    },
  },
};

const projects = [
  {
    image: "./Ecomiam/Ecomiammockup2.1.png",
    tag: "uiux",
    page: "ecomiam",
  },
  { image: "./WWWomen/wwwomen1.png", tag: "uiux", page: "wwwomen" },
  {
    image: "./MichelEtColette/CharteLogo.png",
    tag: "artDirection",
    page: "micheletcolette",
  },
  { image: "./Motif/Motif.png", tag: "graphicDesign", page: "motif" },
  { image: "./Better/Better1.png", tag: "uiux", page: "better" },
  { image: "./Sockmates/AfficheMockup.png", tag: "artDirection", page: "sockmates" },
  { image: "./GaiaCo/Logo.png", tag: "uiux", page: "gaiaco" },
];

const Projets = () => {
  const { language } = useLanguage();
  const filters = translations[language]?.filters || translations.fr.filters;
  const allProjectsLabel =
    translations[language]?.allProjects || translations.fr.allProjects;
  const projectTitles =
    translations[language]?.projectTitles || translations.fr.projectTitles;

  const [selectedFilter, setSelectedFilter] = useState(null);
  const navigate = useNavigate();

  const filteredProjects = selectedFilter
    ? projects.filter((project) => project.tag === selectedFilter)
    : projects;

  return (
    <div className="projets-container">
      <div className="projets-filters">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            className={`filter-button ${selectedFilter === key ? "active" : ""}`}
            onClick={() => setSelectedFilter(key)}
          >
            {label}
          </button>
        ))}
        <button
          className={`filter-button ${selectedFilter === null ? "active" : ""}`}
          onClick={() => setSelectedFilter(null)}
        >
          {allProjectsLabel}
        </button>
      </div>

      <div className="projets-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.page}
            className="projet-card"
            onClick={() => {
              if (project.page) {
                navigate(`/projets/${project.page}`);
              }
            }}
            style={{ cursor: project.page ? "pointer" : "default" }}
          >
            <div
              className="projet-image-placeholder"
              aria-label={projectTitles[project.page] || ""}
            >
              <img
                src={project.image}
                alt={projectTitles[project.page] || ""}
                className="projet-image"
              />
            </div>
            <p className="projet-title">{projectTitles[project.page] || ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
