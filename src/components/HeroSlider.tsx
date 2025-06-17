import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const banners = [
  '/bg_img/onisshop_bg.jpg',
  '/bg_img/onisplus_bg.jpg',
  '/bg_img/onispos_bg.jpg',
  '/bg_img/onistoollogo_bg.jpg',
  '/bg_img/onisfood_bg1.png',
  '/bg_img/onisservice.png',
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {banners.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`hero-slide ${index === current ? 'active' : ''}`}
          alt={`slide-${index}`}
        />
      ))}
    </div>
  );
};

export default HeroSlider;
