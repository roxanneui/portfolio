import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './main.css';
import NameIntro from './components/main/NameIntro';
import Presentation from './components/main/Presentation';
import Projects from './components/main/Projects';
import EyeIntro from './components/EyeIntro';
import PorteDocu1 from './components/main/PorteDocu1';
import ScrollGallery from './components/main/ScrollGallery'; // ajuste le chemin si besoin
import './tailwind.css';



function App() {
  const [hasLoaded, setHasLoaded] = useState(false); // Gère l'activation de l'animation du texte après le chargement
  const [isIntroDone, setIsIntroDone] = useState(false); // Ajout de l'état pour gérer la fin de l'intro

  useEffect(() => {
    // Simuler la fin de l'écran de chargement
    const timer = setTimeout(() => {
      setHasLoaded(true); // Lancer l'animation après 3 secondes (ou après la fin de ton écran de chargement)
    }, 3000); // Ici, 3000ms = 3 secondes, ajuste en fonction de ton écran de chargement
    return () => clearTimeout(timer);
  }, []);

  const handleIntroEnd = () => {
    setIsIntroDone(true); // L'animation de l'intro est terminée
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (window.scrollY === 0 && e.deltaY < 0) {
        e.preventDefault(); // Block scroll-up when already at top
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <>
      <Header />
      <NameIntro />
      <Presentation />
      {/* <PorteDocu1 /> cc*/}
      <Projects />
      {/* <ScrollGallery /> */}
      <Footer isLineDisplayed={false} />
      {/* <EyeIntro onIntroEnd={handleIntroEnd} /> */}
    </>
  );
}

export default App;
