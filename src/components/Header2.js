import React from 'react';
import './Header2.css';

const Header2 = () => {
  return (
    <div className="header2">
      <nav className="services-nav">
        <ul className="services-list">
          <li className="service-item"><a href="#home">Inicio</a></li>
          <li className="service-item"><a href="#hotel">Hotel</a></li>
          <li className="service-item"><a href="#spa">Spa</a></li>
          <li className="service-item"><a href="#daycare">Guardería</a></li>
          <li className="service-item"><a href="#plans">Planes</a></li>
          <li className="service-item"><a href="#plans">Tienda</a></li>
          <li className="service-item"><a href="#contact">Contáctanos</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header2;