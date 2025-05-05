// src/components/ScrollSection.jsx
import React from 'react';
import './ScrollSection.css';

const ScrollSection = () => {
  const items = [
    { title: 'Projet A', color: '#FF6B6B' },
    { title: 'Projet B', color: '#4ECDC4' },
    { title: 'Projet C', color: '#FFE66D' },
    { title: 'Projet D', color: '#1A535C' },
  ];

  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {items.map((item, index) => (
          <div key={index} className="scroll-project" style={{ backgroundColor: item.color }}>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSection;
