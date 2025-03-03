import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import "./portfolio.css"
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <h2 className="footer-name">Kiran Dekaliya</h2>
          <p className="footer-title">Full-Stack Developer</p>
        </div>
        
        <div className="footer-social">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="social-link"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="container">
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Kiran Dekaliya. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#home" className="footer-link">
              Home
            </a>
            <a href="#about" className="footer-link">
              About
            </a>
            <a href="#projects" className="footer-link">
              Projects
            </a>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
