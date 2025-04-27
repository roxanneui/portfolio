import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './PorteDocu1.css';

function PorteDocu1() {
  const [pageTurned, setPageTurned] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' }); // Détecte le scroll

  return (
    <div className="porte-document-container" ref={ref}>
      <div className="first-page-wrapper">
        <motion.div
        className="first-page"
        initial={{ rotateX: 0, y: 0 }}
        animate={isInView ? { rotateX: 100, y: "100vh", opacity: 0 } : { rotateX: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        />
    </div>

      {/* Porte-document */}
      <div className="porte-document">
        {/* Languettes */}
        <div className="tabs">
          <button className="tab tab-left">
            Première
          </button>
          <button
            className="tab tab-right"
            onClick={() => setPageTurned(true)}
          >
            Tourner
          </button>
        </div>

        {/* Contenu central */}
        <div className="document-content">
          {pageTurned ? (
            <div className="new-page">
              <img src="/tonimage2.png" alt="Nouvelle page" />
            </div>
          ) : (
            <div className="current-page">
              <img src="/tonimage1.png" alt="Première page" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PorteDocu1;
