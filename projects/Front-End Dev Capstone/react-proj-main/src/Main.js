import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Header from './Header'; 
import AboutPage from './AboutPage';


function Main() {
  return (
    <Routes>
      <Route path="/" element={<><Header /><Homepage /></>} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default Main;