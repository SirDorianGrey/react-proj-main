import React from 'react';


function Footer() {
  return (
    <footer>
      <div class= 'footer_container'>
      <section>
        <h3>Navigation</h3>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </section>
      <section>
        <h3>Contact</h3>
        <p>123 Main Street</p>
        <p>City, State, ZIP</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@example.com</p>
      </section>
      <section>
        <h3>Social Media Links</h3>
        <ul>
          <li><a href="https://www.instagram.com/example">Instagram</a></li>
          <li><a href="https://www.facebook.com/example">Facebook</a></li>
          <li><a href="https://www.twitter.com/example">Twitter</a></li>
        </ul>
      </section>
      </div>
    </footer>
  );
}

export default Footer;