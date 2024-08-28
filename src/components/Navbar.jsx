import React from 'react';
import './Navbar.css'; // You can style this component in a separate CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Amnic</div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#company">Company</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#connect">Let's Connect</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
