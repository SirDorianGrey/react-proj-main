import './App.css';
import React from 'react'
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav /> 
      <Main />
    </BrowserRouter>
      <Footer />
    </>
  );
}


export default App;
