import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#">Бүтээгдэхүүн</a></li>
        <li><a href="#">Төхөөрөмж</a></li>
        <li><a href="#">Мэдээлэл</a></li>
        <li><a href="#">Түгээмэл асуултууд</a></li>
        <li><a href="#">Холбоо барих</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
