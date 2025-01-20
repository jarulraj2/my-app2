// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Purple Buzz. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">Facebook</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
