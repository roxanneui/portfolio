
import React from 'react';
import './NameIntro.css';

function NameIntro() {
  const name = ['R', 'O', 'X', 'A', 'N', 'N', 'E'];

  return (
    <div className="name-intro">
      {name.map((letter, index) => (
        <span key={index} className="name-letter">{letter}</span>
      ))}
    </div>
  );
}

export default NameIntro;
