import React from "react";
import "./APropos.css";

function Apropos() {
  return (
    <section className="apropos-container">
      <h1 className="main-title">Roxanne Landry</h1>
      <h2 className="subtitle">Étudiante en UI UX design à Paris</h2>

      <div className="paragraph">
        <p><strong>En recherche d’une alternance pour septembre 2025 !</strong></p>
        <p>
          Passionnée par les technologies et les arts visuels, je souhaite me spécialiser en design graphique et en UX UI design. Grâce à mes deux ans de formation en design à Brassart, j’ai développé mon sens du détail, mes capacités d’analyse et de création visuelle. Je maîtrise la suite Adobe, Figma, HTML/CSS, et j’ai des bases en JavaScript et React.
        </p>
        <p>
          Je suis curieuse, impliquée, capable de travailler en équipe, et j’aime proposer des solutions innovantes. Je suis à la recherche d’une alternance d’un an en UI/UX design à Paris, à partir de septembre. Je veux continuer à apprendre, à créer des interfaces fonctionnelles et esthétiques, et contribuer concrètement à des projets.
        </p>
      </div>

      <div className="mini-sections">
        <div className="mini-section">
          <h3>Une connaisseuse des technologies</h3>
          <p>Des mots plus jeunes déjà.</p>
        </div>
        <div className="mini-section">
          <h3>Une connaisseuse des technologies</h3>
          <p>Des mots plus jeunes déjà.</p>
        </div>
      </div>
    </section>
  );
}

export default Apropos;
