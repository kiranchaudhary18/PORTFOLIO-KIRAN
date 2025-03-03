import React from 'react';
import { ArrowRight } from 'lucide-react';
import "./portfolio.css"

const Hero = () => {
    return (
      <div className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span>Kiran Dekaliya</span>
            </h1>
            <p className="hero-subtitle">
            Full-Stack Developer crafting beautiful and functional websites.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={18} style={{ marginLeft: '0.5rem',}} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <img
                src="https://res.cloudinary.com/dnbayngfx/image/upload/v1740198790/passport_photo-removebg-preview_1_rqzejm.png"
                alt="Profile"
              />
            </div>
            <div className="hero-badge">
              <span>Available for hire!</span>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    );
  };
  
  export default Hero;
  