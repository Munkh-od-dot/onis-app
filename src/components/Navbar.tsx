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
        <li>Бүтээгдэхүүн</li>
        <li><Link to="/tuhuurumj">Төхөөрөмж</Link></li>
        <li>Мэдээлэл</li>
        <li>Түгээмэл асуултууд</li>
        <li>Холбоо барих</li>
      </ul>
    </nav>
  );
};

export default Navbar;
