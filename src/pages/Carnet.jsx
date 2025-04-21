import React, { useEffect, useRef } from 'react'
import './Carnet.css'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Carnet() {
  
  const cursorRef = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
      <>
      <Header />
      <main className="gallery" style={{ padding: '2rem' }}>
        <h1>Carnet</h1>
        <div className="projects" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        </div>
      </main>
      <Footer />

      <div className="custom-cursor" ref={cursorRef}></div>
    </>
    
  );
}

