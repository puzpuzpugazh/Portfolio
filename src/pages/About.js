import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Angular', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'MongoDB', level: 85 },
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 85 },
    { name: 'Git', level: 90 },
    { name: 'Bootstrap', level: 80 },
  ];

  const experience = [
    {
      year: 'present',
      title: 'Freelancer',
      description: 'Working as a freelancer and building web applications using React, Node.js, express and MongoDB.'
    },
    {
      year: '2024 - 2025',
      title: 'Front-End Developer',
      company: 'TVM INFOTECH',
      description: 'Leading development of web applications using Angular and postgres, Impex-query. Mentoring junior developers and implementing best practices.'
    },
    {
      year: '2024',
      title: 'Front-end developer as Fresher',
      company: 'BPO2IT',
      description: 'Built and maintained multiple web applications. Collaborated with design and product teams to deliver high-quality solutions.'
    },
    {
      year: '2023 - 2024',
      title: 'Front-End Developer as Intern',
      company: 'Lato Technologies',
      description: 'Developed responsive websites and web applications using modern JavaScript frameworks and CSS preprocessors.'
    }
  ];

  const education = [
    {
      year: '2016 - 2020',
      degree: 'Bachelor of Engineering',
      school: 'APEC, Melmaruvathur',
      description: 'Graduated with honors. Specialized in web development and software engineering courses.'
    }
  ];

  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <motion.section 
          className="about-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-hero-content">
            <motion.h1 
              className="about-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Me
            </motion.h1>
            <motion.p 
              className="about-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionate developer creating innovative digital solutions
            </motion.p>
          </div>
        </motion.section>

        {/* Personal Info */}
        <motion.section 
          className="personal-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-2">
            <div className="info-content">
              <h2>Who I Am</h2>
              <p>
                I'm a passionate Full Stack Developer with over 1+ years of experience in creating 
                beautiful, functional, and user-centered digital experiences. I am always looking 
                for new and innovative ways to bring my clients' visions to life.
              </p>
              <p>
                I believe that design is about more than just making things look pretty – it's about 
                solving problems and creating intuitive, enjoyable experiences for users.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="contact-info">
                <div className="info-item">
                  <FaEnvelope />
                  <span>pugazhenthi.kamalakkannan@gmail.com</span>
                </div>
                <div className="info-item">
                  <FaMapMarkerAlt />
                  <span>Chennai, IN</span>
                </div>
                <div className="info-item">
                  <FaCalendarAlt />
                  <span>Available for new opportunities</span>
                </div>
              </div>

              <div className="about-buttons">
                <a href={require('../assets/PUGAZHENTHI K_RESUME.pdf')} className="btn btn-primary" download>
                  <FaDownload />
                  Download Resume
                </a>
                <a href="mailto:pugazhenthi.kamalakkannan@gmail.com" className="btn btn-secondary">
                  <FaEnvelope />
                  Get In Touch
                </a>
              </div>
            </div>

            <div className="profile-section">
              <div className="profile-card">
                <div className="profile-image">
                  <div className="profile-placeholder">
                    <span>👨‍💻</span>
                  </div>
                </div>
                <div className="profile-details">
                  <h3>Pugazhenthi K</h3>
                  <p>Full Stack Developer</p>
                  <div className="social-links">
                    <a href="https://github.com/puzpuzpugazh" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                    <a href="mailto:pugazhenthi.kamalakkannan@gmail.com">
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="skills-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-title">
            <h2>Skills & Expertise</h2>
            <p>Technologies and tools I work with</p>
          </div>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          className="experience-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-title">
            <h2>Work Experience</h2>
            <p>My professional journey</p>
          </div>
          
          <div className="timeline">
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{exp.year}</div>
                  <h3>{exp.title}</h3>
                  <h4>{exp?.company || ''}</h4>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          className="education-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-title">
            <h2>Education</h2>
            <p>My academic background</p>
          </div>
          
          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="education-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="education-year">{edu.year}</div>
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <p>{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 