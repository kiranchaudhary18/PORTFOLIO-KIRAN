import React from 'react';
import { Code, Server, Database, Layout, Figma, Users } from 'lucide-react';
import "./portfolio.css"
const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90, icon: <Layout size={20} /> },
    { name: 'JavaScript', level: 85, icon: <Code size={20} /> },
    { name: 'React', level: 80, icon: <Code size={20} /> },
    { name: 'Node.js', level: 75, icon: <Server size={20} /> },
    { name: 'SQL/NoSQL', level: 70, icon: <Database size={20} /> },
    { name: 'UI/UX Design', level: 65, icon: <Figma size={20} /> },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <Code size={20} /> },
    { name: 'Teamwork', icon: <Users size={20} /> },
    { name: 'Communication', icon: <Users size={20} /> },
    { name: 'Time Management', icon: <Users size={20} /> },
  ];

  return (
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
      </div>

      <div className="about-grid">
        <div>
          <h3 className="about-title">Who am I?</h3>
          <p className="about-text">
          I'm a passionate Full-Stack Developer with a strong foundation in web technologies and a keen eye for design.
          I am learning at Rai University in Computer Science Engineering and have gained hands-on experience in building responsive and dynamic web applications.
          </p>
          <p className="about-text">
            My journey in web development started with a curiosity about how websites work, which quickly evolved into a 
            passion for creating intuitive and engaging user experiences. I enjoy solving complex problems and turning 
            ideas into reality through clean, efficient code.
          </p>
          <p className="about-text">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or enjoying outdoor activities to maintain a healthy work-life balance.
          </p>
        </div>

        <div>
          <h3 className="about-title">Technical Skills</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <div className="skill-name">
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="soft-skills">
            <h3 className="about-title">Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
