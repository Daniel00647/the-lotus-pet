import React from 'react';
import logo from './logo.src.png';

const HomePage = () => {
  return (
    <div className="home">
    <div className="home-text">
      <h1>ThePetLotus</h1>
      <p>       Hotel&Spa</p>
    </div>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
  );
};

export default HomePage;