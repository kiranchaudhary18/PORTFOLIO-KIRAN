import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, ExternalLink, Code } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
          <Projects />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
