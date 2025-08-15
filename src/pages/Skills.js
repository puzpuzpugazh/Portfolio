import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptop, FaDatabase, FaTools, FaMobile, FaServer } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: <FaLaptop />,
      skills: [
        { name: 'React', level: 95, experience: '1+ years' },
        { name: 'JavaScript', level: 90, experience: '2+ years' },
        { name: 'TypeScript', level: 85, experience: '1+ years' },
        { name: 'HTML/CSS', level: 95, experience: '2+ years' },
        { name: 'Tailwind CSS', level: 90, experience: '1+ years' },
        { name: 'Bootstrap', level: 90, experience: '1+ years' },
        // { name: 'Next.js', level: 80, experience: '1+ years' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', level: 85, experience: '1+ years' },
        { name: 'Express.js', level: 90, experience: '1+ years' },
        // { name: 'Python', level: 80, experience: '1+ years' },
        // { name: 'Django', level: 75, experience: '1+ years' },
        { name: 'REST APIs', level: 90, experience: '1+ years' },
        // { name: 'GraphQL', level: 70, experience: '1+ years' }
      ]
    },
    {
      id: 'database',
      name: 'Database & Cloud',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', level: 85, experience: '1+ years' },
        { name: 'PostgreSQL', level: 80, experience: '1+ years' },
        { name: 'MySQL', level: 80, experience: '1+ years' },
        // { name: 'Firebase', level: 85, experience: '1+ years' },
        // { name: 'AWS', level: 70, experience: '1+ years' },
        // { name: 'Redis', level: 75, experience: '1+ years' },
        // { name: 'Docker', level: 70, experience: '1+ years' }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      icon: <FaMobile />,
      skills: [
        { name: 'React Native', level: 80, experience: '1+ years' },
        // { name: 'Expo', level: 85, experience: '1+ years' },
        // { name: 'iOS Development', level: 70, experience: '1+ years' },
        { name: 'Android Development', level: 70, experience: '1+ years' }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Others',
      icon: <FaTools />,
      skills: [
        { name: 'Git', level: 90, experience: '2+ years' },
        { name: 'GitHub', level: 95, experience: '2+ years' },
        { name: 'VS Code', level: 95, experience: '2+ years' },
        { name: 'Figma', level: 90, experience: '1+ years' },
        { name: 'Postman', level: 85, experience: '1+ years' },
        // { name: 'Jest', level: 80, experience: '1+ years' }
      ]
    }
  ];

  const currentCategory = skillCategories.find(cat => cat.id === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="skills">
      <div className="container">
        {/* Hero Section */}
        <motion.section 
          className="skills-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="skills-hero-content">
            <motion.h1 
              className="skills-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Skills & Expertise
            </motion.h1>
            <motion.p 
              className="skills-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Technologies and tools I use to bring ideas to life
            </motion.p>
          </div>
        </motion.section>

        {/* Category Navigation */}
        <motion.section 
          className="category-nav"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="category-buttons">
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Skills Display */}
        <motion.section 
          className="skills-display"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            key={activeCategory}
            className="skills-content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="category-header">
              <h2>{currentCategory.name}</h2>
              <p>Technologies and frameworks I work with</p>
            </div>

            <motion.div 
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {currentCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="skill-header">
                    <h3>{skill.name}</h3>
                    <span className="skill-experience">{skill.experience}</span>
                  </div>
                  
                  <div className="skill-progress-container">
                    <div className="skill-progress-bar">
                      <motion.div 
                        className="skill-progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Additional Skills */}
        <motion.section 
          className="additional-skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-title">
            <h2>Other Skills</h2>
            <p>Additional technologies and methodologies</p>
          </div>
          
          <div className="skills-tags">
            <span className="skill-tag">Agile/Scrum</span>
            <span className="skill-tag">CI/CD</span>
            {/* <span className="skill-tag">Microservices</span> */}
            <span className="skill-tag">Responsive Design</span>
            <span className="skill-tag">SEO</span>
            <span className="skill-tag">Performance Optimization</span>
            {/* <span className="skill-tag">Testing</span> */}
            <span className="skill-tag">UI/UX Design</span>
            <span className="skill-tag">API Design</span>
            {/* <span className="skill-tag">Security</span> */}
            {/* <span className="skill-tag">Linux</span> */}
            <span className="skill-tag">NPM/Yarn</span>
          </div>
        </motion.section>

        {/* Learning Section */}
        <motion.section 
          className="learning-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-title">
            <h2>Currently Learning</h2>
            <p>Technologies I'm exploring and improving</p>
          </div>
          
          <div className="learning-grid">
            <div className="learning-item">
              <div className="learning-icon">🌐</div>
              <h3>WordPress</h3>
              <p>Building and customizing websites using WordPress CMS</p>
            </div>
            <div className="learning-item">
              <div className="learning-icon">🎨</div>
              <h3>Figma</h3>
              <p>Designing user interfaces and prototypes collaboratively</p>
            </div>
            <div className="learning-item">
              <div className="learning-icon">🧪</div>
              <h3>Jest</h3>
              <p>Testing JavaScript applications with a modern testing framework</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Skills; 