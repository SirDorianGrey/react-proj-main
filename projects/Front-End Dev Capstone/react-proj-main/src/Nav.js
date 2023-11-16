import React from 'react';
import logo from './Vector.png';
import './App.css';
function Nav() {
  return (
    <nav>
      {/* Navigation Bar */}
      <ul className="navbar">
      <a href="/"><li className="log o-item"><img src={logo} alt="Little Lemon Logo" /></li></a>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;