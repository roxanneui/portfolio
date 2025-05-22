import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import './ScrollGallery.css';

const ScrollGallery = ({ images }) => {
  if (!Array.isArray(images) || images.length === 0) return null;

  const [mainImage, ...restImages] = images;

  return (
    <div className="image-gallery">
      {restImages.map((image) => (
        <div className="image-item" key={image.id}>
          {image.url.endsWith('.mp4') ? (
            <video
              src={image.url}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <img src={image.url} alt={`Image ${image.id}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ScrollGallery;
