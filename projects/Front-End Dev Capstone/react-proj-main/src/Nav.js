import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Vector.png';
import './App.css';

function Nav() {
  return (
    <nav>
      <ul className="navbar">
        <li className="logo-item"><Link to="/"><img src={logo} alt="Little Lemon Logo" /></Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;