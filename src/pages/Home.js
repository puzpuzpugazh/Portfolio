import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaDownload, FaCode, FaLaptop, FaRocket } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/puzpuzpugazh', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/pugazhenthi-k-965127247/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://x.com/puzpuzpugazh', label: 'Twitter' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-text" variants={itemVariants}>
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm <span className="highlight">Pugazhenthi K</span>
              </motion.h1>
              <motion.h2 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Full Stack Developer
              </motion.h2>
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I create beautiful, functional, and user-centered digital experiences. 
                Passionate about clean code and innovative solutions that make a difference.
              </motion.p>
              
              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link to="/projects" className="btn btn-primary">
                  View My Work
                  <FaArrowRight />
                </Link>
                <a href={require('../assets/PUGAZHENTHI K Resume .pdf')} className="btn btn-primary" download>
                  <FaDownload />
                  Download Resume
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero-avatar"
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="avatar-container">
                {/* Main Avatar Circle */}
                <motion.div 
                  className="avatar-circle"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="avatar-face">
                    <div className="avatar-eyes">
                      <motion.div 
                        className="eye left-eye"
                        animate={{ scaleY: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div 
                        className="eye right-eye"
                        animate={{ scaleY: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      />
                    </div>
                    <motion.div 
                      className="avatar-smile"
                      animate={{ scaleX: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>

                {/* Floating Code Elements */}
                <motion.div 
                  className="floating-element code-element"
                  animate={{ 
                    y: [-20, 20, -20],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <FaCode />
                </motion.div>

                <motion.div 
                  className="floating-element laptop-element"
                  animate={{ 
                    y: [20, -20, 20],
                    rotate: [0, -180, -360]
                  }}
                  transition={{ 
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <FaLaptop />
                </motion.div>

                <motion.div 
                  className="floating-element rocket-element"
                  animate={{ 
                    y: [-15, 15, -15],
                    rotate: [0, 90, 180, 270, 360]
                  }}
                  transition={{ 
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <FaRocket />
                </motion.div>

                {/* Animated Rings */}
                <motion.div 
                  className="ring ring-1"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <motion.div 
                  className="ring ring-2"
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <motion.div 
                  className="ring ring-3"
                  animate={{ 
                    rotate: [0, -360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                />

                {/* Particle Effects */}
                <motion.div 
                  className="particle particle-1"
                  animate={{ 
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="particle particle-2"
                  animate={{ 
                    x: [0, -25, 0],
                    y: [0, 25, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div 
                  className="particle particle-3"
                  animate={{ 
                    x: [0, 20, 0],
                    y: [0, 20, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="grid grid-2">
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>About Me</h2>
              <p>
                I'm a passionate developer with 1+ years of experience building web applications. 
                I specialize in React, Node.js, and modern web technologies. When I'm not coding, 
                you can find me exploring new technologies, contributing to open source, or 
                sharing knowledge with the developer community.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More
                <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div 
              className="stats"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="stat-item">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>1+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>1+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 