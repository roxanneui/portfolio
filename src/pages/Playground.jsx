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
];

export default function Playground() {
    const [zoomedImage, setZoomedImage] = useState(null);
    const [positions, setPositions] = useState([]);
    const boxRef = useRef(null);
    const dragState = useRef({ isDragging: false });
  
    useEffect(() => {
      const generateRandomPositions = () =>
        projects.map(() => ({
          top: `${Math.random() * 70 + 10}%`,
          left: `${Math.random() * 70 + 10}%`,
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
                onPointerDown={() => (dragState.current.isDragging = false)}
                onDragStart={() => (dragState.current.isDragging = true)}
                onPointerUp={() => {
                  if (!dragState.current.isDragging) {
                    setZoomedImage(project);
                  }
                }}
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
  