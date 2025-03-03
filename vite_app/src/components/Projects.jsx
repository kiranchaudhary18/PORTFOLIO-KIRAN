import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import "./portfolio.css"
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Tattoo Studio Website',
      description: 'A responsive website for a tattoo studio showcasing their work, artists, and booking system.',
      image: 'https://images.unsplash.com/photo-1590246814883-57004f3b7183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com',
      demoLink: 'https://example.com',
    },
    {
      id: 2,
      title: 'React API Project',
      description: 'A collection of projects including a Meal App for discovering recipes, a Cocktails App for mixing drinks, a Harry Potter-themed interactive experience, and a secure Bank API for managing transactions. 🚀',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1740974232/5noda61589575158_jlxqyy.png',
      tags: ['React','Node.js', 'Express'],
      githubLink: 'https://github.com/kiranchaudhary18/THeMealDB-',
      demoLink: 'https://themealdb-api-1.onrender.com/',
    },
    {
      id: 3,
      title: 'Youtube Clone',
      description: 'created a YouTube clone where users can search for videos and watch them using an API.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1740974790/youtube_jlxmw7.png',
      tags: ['React', 'Express', 'Node.js', 'Mongodb'],
      githubLink: 'https://github.com/kiranchaudhary18/youtube.com',
      demoLink: 'https://example.com',
    },
    {
      id: 4,
      title: 'Countdown Timer',
      description: ' created a countdown timer that allows users to set a time and track the remaining duration until it reaches zero.',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1740976402/countdown_apzxof.png',
      tags: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/kiranchaudhary18/countdownTimer',
      demoLink: 'https://preeminent-peony-172547.netlify.app/',
    },
  ];

  const filters = ['all', 'React', 'Node.js', 'JavaScript',  'MongoDB','HTML/CSS'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
        </p>
      </div>

      <div className="project-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="https://res.cloudinary.com/dnbayngfx/video/upload/v1740977183/Vite_React_-_28_February_2025_2_eeubsa.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Projects;