import React, { useEffect, useRef } from 'react'
import './Carnet.css'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from "framer-motion";




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

  return (
      <>
      <Header />
      <main className="gallery" style={{ padding: '2rem' }}>
        <h1>Carnet</h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        <h2></h2>
        </motion.div>
        <motion.img
          src="./Carnet/image1.png"
          alt="Création cool"
          className="gallery-item"
        />

        <motion.img
          src="./Carnet/image2.png"
          alt="Création 2"
          className="gallery-item"
        />


      </main>
      <Footer />

      {/* <div className="custom-cursor" ref={cursorRef}></div> */}
    </>
    
  );
}

