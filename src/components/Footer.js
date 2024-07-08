import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Iconos de redes sociales

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="company-info">
            <p>&copy; {new Date().getFullYear()} ThePetLotus</p>
            <p>Dirección: Calle 143 No 128-38, Bogota Dc, Colombia</p>
            <p>Teléfono: +57 322 922 8564 </p>
            <p>Email: contacto@lotuspet.com</p>
          </div>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;