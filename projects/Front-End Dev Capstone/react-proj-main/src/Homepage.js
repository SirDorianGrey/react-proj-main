import React from 'react';
import salad from './Greek Salad.png'
import Bruschetta from './Bruchetta.png'
import cake from './Lemon Dessert.png'
import icon from './Delivery Icon.svg'
import { Link } from 'react-router-dom';

function Homepage() {
  return (
<main>
  <h1>This weeks specials</h1>
  
  <button type="button" class="online-menu-button"> 
    <Link to="/services">Online Menu</Link>
  </button>
  

  <div class="dish-container">
    <div class="dish-card">
      <img src={salad} alt="Little Lemon Greek Salad" />
      <div class="dish-card-content">
        <div class="dish-card-header">
          <h4>Greek Salad</h4>
          <p class="price">$12.99</p>
        </div>
        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago
           style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
        <div class="order-container">
            <p class="order">Order a delivery</p>
            <img class="icon" src={icon} alt="delivery icon of scooter" />
        </div>
      </div>
    </div>

    <div class="dish-card">
      <img class='bru' src={Bruschetta} alt="Little Lemon Bruchetta" /> 
      <div class="dish-card-content">
        <div class="dish-card-header second-card-header">
          <h4>Bruchetta </h4>
          <p class="price">$5.99</p>
        </div>
        <p>Our Bruschetta is made from grilled bread that
           has been smeared with garlic and seasoned with salt and olive oil.  </p>
        <div class="order-container">
            <p class="order">Order a delivery</p>
            <img class="icon" src={icon} alt="delivery icon of scooter" />
        </div>
      </div>
    </div>

    <div class="dish-card">
      <img src={cake} alt="Little Lemon Lemon Dessert" />
      <div class="dish-card-content">
        <div class="dish-card-header third-card-header">
          <h4>Lemon Dessert</h4>
          <p class="price">$5.99</p>
        </div>
        <p>This comes straight from grandma’s
           recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p> 
        <div class="order-container">
            <p class="order">Order a delivery</p>
            <img class="icon" src={icon} alt="delivery icon of scooter" />
        </div>
      </div>
    </div>
  </div>
</main>
  );
}

export default Homepage;