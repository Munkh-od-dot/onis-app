import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const banners = [
  '/product_img/banner1.jpg',
  '/product_img/banner2.jpg',
  '/product_img/banner3.jpg',
  '/product_img/banner4.jpg',
  '/product_img/banner5.jpg',
  '/product_img/banner6.jpg',
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
