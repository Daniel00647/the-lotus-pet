import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="promo-container">
        <span className="promo-label">PROMOCIONES:</span>
        <div className="promo-text-container">
          <p className="promo-text">¡Aprovecha nuestra promoción especial de verano! 50% de descuento en todos nuestros servicios.</p>
        </div>
      </div>
      <div className="auth-links">
        <a href="#login">Login</a>
        <a href="#register">Registro</a>
      </div>
    </header>
  );
};

export default Header;