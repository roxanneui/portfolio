// ScrollGallery.jsx
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import './ScrollGallery.css';

const ScrollGallery = ({ images }) => {
  return (
    <div className="example-container">
      {/* <div className="scroll-message">
        <span>Scroll down</span>
      </div> */}
      <HorizontalScrollCarousel images={images} />
      {/* <div className="scroll-message">
        <span>Scroll up</span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = ({ images }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="carousel-section">
      <div className="carousel-wrapper">
      <motion.div style={{ x }} className="carousel-track">
        {Array.isArray(images) &&
          images.map((img, index) => (
        <Card key={index} card={img} />
         ))}
      </motion.div>

      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${card.url})`,
        }}
      ></div>
      <div className="card-overlay">
        <p className="card-title">{card.title}</p>
      </div>
    </div>
  );
};

export default ScrollGallery;
