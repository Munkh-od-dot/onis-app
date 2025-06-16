import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/product">Бүтээгдэхүүн</Link></li>
        <li><Link to="/tuhuurumj">Төхөөрөмж</Link></li>
        <li>Мэдээлэл</li>
        <li><Link to="/Faq">Түгээмэл асуултууд</Link></li>
        <li><Link to="/Contact">Холбоо барих</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
