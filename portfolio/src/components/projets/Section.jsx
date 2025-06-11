import React from 'react';
import './Section.css';

const Section = ({ textData = [], imageData = [] }) => {
  if (textData.length === 0 && imageData.length === 0) {
    return null;
  }

  return (
    <section className="content-section">
      {textData.length > 0 && (
        <div className="section-row text-row">
          {textData.map((item, index) => (
            <div key={index} className="text-block">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      )}

      {imageData.length > 0 && (
        <div className="section-row image-row">
          {imageData.map((item, index) => {
            const image = `/portfolio${item.image}`;
            return (
              <div key={index} className="image-card">
                <div className="image-placeholder">
                  {item.image && item.image.toLowerCase().endsWith('.mp4') ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={image} alt={item.title} />
                  )}
                </div>
                <p className="image-title">{item.title}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Section;