import { useEffect } from 'react';
import './EyeIntro.css';

const EyeIntro = ({ onIntroEnd }) => {

  useEffect(() => {
    const svgElement = document.querySelector('.eye-svg');
    svgElement.addEventListener('animationend', () => {
      // L'animation est terminée, appelons la fonction onIntroEnd pour signaler la fin
      onIntroEnd();
    });

    return () => {
      svgElement.removeEventListener('animationend', onIntroEnd);
    };
  }, [onIntroEnd]);

  return (
    <div className="eye-wrapper">
      <svg viewBox="0 0 200 100" className="eye-svg">
        <path
          d="M10,50 Q100,0 190,50 Q100,100 10,50 Z"
          className="eye-outline"
        />
        <circle cx="100" cy="50" r="10" className="iris" />
      </svg>
    </div>
  );
};

export default EyeIntro;
