import React from 'react';
import './App.css';
import header_image from './Rectangle 45.png';
function Header() {
  return (
<header class="header-section">
  <div class="text-section">
    <h1 class="title">Little Lemon</h1>
    <h2 class="subtitle">Chicago</h2>
    <p class="lead-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
    <button type="button" class="reserve-button">Reserve a table</button>
  </div>
  <img src={header_image} alt="Little Lemon Tapas dish" class="header-image"/>
</header>
  );
}

export default Header;