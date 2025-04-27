import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './PorteDocu1.css';

function PorteDocu1() {
  const [pageTurned, setPageTurned] = useState(false);
  const [hideFirstPage, setHideFirstPage] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setHideFirstPage(true);
      }, 1200); // attend 1.2s (la durée de l'animation)
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div className="porte-document-container" ref={ref}>
      {/* Feuille blanche qui tombe */}
      {!hideFirstPage && (
        <motion.div
          className="first-page"
          initial={{ y: 0, rotateX: 0 }}
          animate={{ y: isInView ? "100vh" : 0, rotateX: isInView ? 80 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      )}

      {/* Porte-document */}
      <div className="porte-document">
        {/* Languettes en haut à droite */}
        <div className="tabs">
          <button className="tab" onClick={() => setPageTurned(false)}>Première</button>
          <button className="tab" onClick={() => setPageTurned(true)}>Tourner</button>
        </div>

        {/* Contenu du document */}
        <div className="document-content">
          {pageTurned ? (
            <img src="/tonimage2.png" alt="Nouvelle page" className="page-image" />
          ) : (
            <img src="/tonimage1.png" alt="Première page" className="page-image" />
          )}
        </div>
      </div>
    </div>
  );
}

export default PorteDocu1;
