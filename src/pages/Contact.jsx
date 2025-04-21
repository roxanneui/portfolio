import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="contact" style={{ padding: '2rem' }}>
        <h1>Me contacter</h1>
        
      </main>
      <Footer />
    </>
  );
}