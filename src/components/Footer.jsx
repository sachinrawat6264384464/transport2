import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>⚡ TransportHub</h3>
          <p>Your journey is our priority. Travel safe, travel fast.</p>
        </div>

        <div className="footer-links">
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Us</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} TransportHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
