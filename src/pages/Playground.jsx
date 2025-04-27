import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Playground.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const projects = [
  { src: './Carnet/image1.png', alt: 'Better Canettes' },
  { src: './Carnet/image2.png', alt: 'The place to B Ticket' },
  { src: './Carnet/image3.png', alt: 'Workshop Affiche' },
  { src: './Carnet/image4.png', alt: 'Menton Affiche' },
  { src: './Carnet/image5.png', alt: 'Logo Cinélux' },
  { src: './Carnet/image6.png', alt: 'Logo Écomiam' },
  { src: './Carnet/image7.png', alt: 'Portrait' },
  { src: './Carnet/image8.png', alt: 'RL Charte' },
  { src: './Carnet/image10.png', alt: 'Motif Vanadia' },
  { src: './Carnet/image11.png', alt: 'Affiche Vanadia' },
  { src: './Carnet/image12.png', alt: 'Affiche lalaland' },
  { src: './Carnet/image13.png', alt: 'Affiche avec mots destructurés' },
  { src: './Carnet/image14.png', alt: 'Proposition logo Panzani' },
  // { src: './Carnet/image15.png', alt: 'Boite de thés de noel Théaura' },
  { src: './Carnet/image16.png', alt: 'Mockup pour proposition de logo Protection Civile' },
];

export default function Playground() {
    const [zoomedImage, setZoomedImage] = useState(null);
    const [positions, setPositions] = useState([]);
    const boxRef = useRef(null);
    const dragState = useRef({ isDragging: false });
  
    useEffect(() => {
      const generateRandomPositions = () =>
        projects.map(() => ({
          top: `${Math.random() * 70}%`,
          left: `${Math.random() * 70}%`,
        }));
      setPositions(generateRandomPositions());
    }, []);
  
    return (
      <>
        <Header />
        <div className="playground-wrapper">
          <div className="playground-box" ref={boxRef}>
            {projects.map((project, index) => (
              <motion.img
                key={index}
                src={project.src}
                alt={project.alt}
                className="draggable-image"
                drag
                dragElastic={0}
                dragMomentum={false}
                dragConstraints={boxRef}
                whileTap={{ cursor: 'grabbing' }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  position: 'absolute',
                  top: positions[index]?.top,
                  left: positions[index]?.left,
                }}
                onDragStart={() => {
                  dragState.current.isDragging = true;
                }}
                onDragEnd={() => {
                  dragState.current.isDragging = false;
                }}
                onPointerDown={() => (dragState.current.isDragging = false)}
                onPointerUp={() => {
                  if (!dragState.current.isDragging) {
                    setZoomedImage(project);
                  }
                }}
                onDragStartCapture={(e) => e.preventDefault()}
              />
            ))}
          </div>
          {zoomedImage && (
            <div className="zoom-overlay" onClick={() => setZoomedImage(null)}>
              <img src={zoomedImage.src} alt={zoomedImage.alt} className="zoomed-image" />
            </div>
          )}
        </div>
        <Footer />
      </>
    );
  }
  