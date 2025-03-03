import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import "./portfolio.css"
const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="#home">Portfolio</a>
        </div>

        {/* Desktop menu */}
        <div className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button
            onClick={toggleDarkMode}
            className="theme-toggle"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="mobile-controls">
          <button
            onClick={toggleDarkMode}
            className="theme-toggle"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="menu-toggle"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="container">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
