import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">E-Commerce Catalog</h1>
      <ul className="navbar-links">
        <li><a href="#home"><i className="fas fa-home"></i> Home</a></li>
        <li><a href="#products"><i className="fas fa-box-open"></i> Products</a></li>
        <li><a href="#about"><i className="fas fa-info-circle"></i> About</a></li>
        <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
