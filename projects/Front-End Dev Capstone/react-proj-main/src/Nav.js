import React from 'react';

function Nav() {
  return (
    <nav>
      {/* Navigation Bar */}
      <ul>
      <img src="Vector.png" alt="Little Lemon Logo" />
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