import React, { useState } from 'react';
import './ProjectAccordion.css';

const ProjectAccordion = ({ title, bgColor, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemBgColor = bgColor === '#000000' ? '#974BFF' : '#000000';

  return (
    <div className="accordion-item">
      <div className="accordion-header-background" style={{ backgroundColor: bgColor }}>
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)} style={{ backgroundColor: itemBgColor }}>
        <h2>{title}</h2>
      </button>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`} style={{ backgroundColor: itemBgColor }}>
        {children}
      </div>
    </div>
  );
};

export default ProjectAccordion;
