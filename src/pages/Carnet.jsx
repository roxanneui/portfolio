import React, { useEffect, useRef, useContext } from 'react'
import './Carnet.css'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import { LanguageContext } from '../context/LanguageContext';

export default function Carnet() {
  
  // const cursorRef = useRef(null)

  // useEffect(() => {
  //   const moveCursor = (e) => {
  //     if (cursorRef.current) {
  //       cursorRef.current.style.left = `${e.clientX}px`
  //       cursorRef.current.style.top = `${e.clientY}px`
  //     }
  //   }

  //   window.addEventListener('mousemove', moveCursor)

  //   return () => {
  //     window.removeEventListener('mousemove', moveCursor)
  //   }
  // }, [])
  const { language } = useContext(LanguageContext);
  const content = {
    fr: {
      carnetText: "Carnet",
    },
    en: {
      carnetText: "Sketchbook",
    },
  };


const galleryImages = [
  { src: "./Carnet/image1.png", alt: "Better Canettes" },
  { src: "./Carnet/image2.png", alt: "The place to B Ticket" },
  { src: "./Carnet/image3.png", alt: "Workshop Affiche" },
  { src: "./Carnet/image4.png", alt: "Menton Affiche" },
  { src: "./Carnet/image5.png", alt: "Logo Cinélux" },
];


  return (
    <>
      <Header />
      <main className="carnet">
        <h1>{content[language].carnetText}</h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2></h2>
        </motion.div>

        {galleryImages.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={image.alt}
            className="gallery-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          />
        ))}
      </main>
      <Footer />

      {/* <div className="custom-cursor" ref={cursorRef}></div> */}
    </>
  );
}

