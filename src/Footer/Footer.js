import React from 'react';
import './Footer.css'; // Asegúrate de crear y ajustar esta hoja de estilos


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-social-links">
      <a href="#" target="_blank" rel="noopener noreferrer">
      <img src='rs1.png' alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src='rs2.png' alt="Instagram" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src='rs3.png' alt="Twitter" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src='rs4.png' alt="YouTube" />
        </a>
      </div>
      <div className="footer-links-container">
        <div className="footer-links">
          <a href="#">Audio Description</a>
          <a href="#">Investor Relations</a>
          <a href="#">Legal Notices</a>
          <a href="#">Service Code</a>
        </div>
        <div className="footer-links">
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Gift Cards</a>
        </div>
        <div className="footer-links">
          <a href="#">Terms of Use</a>
          <a href="#">Corporate Information</a>
          <a href="#">Media Center</a>
          <a href="#">Privacy</a>
        </div>
        <div className="footer-links">
          <a href="#">Contact Us</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 1997-2024 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
