import React from 'react';
import profilePic from './profile.jpg';

function AboutPage() {
  return (
    <div className="about-page">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago. 
          We are passionate about sharing our love of Mediterranean cuisine with our customers. 
          Our recipes have been passed down through generations, and we take pride in our authentic, 
          homemade dishes.
        </p>
        <p>
          Our mission is to provide a cozy dining experience for our customers, where they can enjoy 
          delicious food in a friendly and welcoming atmosphere. We believe in using only the freshest 
          ingredients, and all our dishes are made from scratch daily.
        </p>
        <p>
          We look forward to welcoming you to Little Lemon and sharing our passion for Mediterranean 
          cuisine with you.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;