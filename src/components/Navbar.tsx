import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Бүтээгдэхүүн</Link></li>
        <li><Link to="/tuhuurumj">Төхөөрөмж</Link></li>
        <li>Мэдээлэл</li>
        <li><Link to="/Faq">Түгээмэл асуултууд</Link></li>
        <li><Link to="/Contact">Холбоо барих</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
