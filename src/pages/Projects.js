import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaLaptop,
  FaMobile,
} from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "🛒",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/puzpuzpugazh/ecommerce-platform",
      live: "https://ecommerce-platform-gamma-two.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "📋",
      category: "frontend",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "https://github.com/puzpuzpugazh/TaskManager",
      live: "https://task-manager-app-7e695.web.app",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard that displays current weather, forecasts, and interactive maps using weather APIs.",
      image: "🌤️",
      category: "frontend",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      github: "https://github.com/puzpuzpugazh",
      live: "https://demo.com",
      featured: false,
    },
    {
      id: 4,
      title: "Blog Platform",
      description:
        "A modern blog platform with markdown support, SEO optimization, and admin dashboard for content management.",
      image: "📝",
      category: "fullstack",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Vercel"],
      github: "https://github.com/puzpuzpugazh",
      live: "https://demo.com",
      featured: false,
    },
    {
      id: 5,
      title: "Mobile Fitness App",
      description:
        "A React Native fitness tracking app with workout plans, progress tracking, and social features.",
      image: "💪",
      category: "mobile",
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
      github: "https://github.com/puzpuzpugazh",
      live: "https://demo.com",
      featured: true,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with modern web technologies and smooth animations.",
      image: "🎨",
      category: "frontend",
      technologies: ["React", "Framer Motion", "CSS3", "Vercel"],
      github: "https://github.com/puzpuzpugazh",
      live: "https://demo.com",
      featured: false,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: <FaCode /> },
    { id: "frontend", label: "Frontend", icon: <FaLaptop /> },
    { id: "fullstack", label: "Full Stack", icon: <FaCode /> },
    { id: "mobile", label: "Mobile", icon: <FaMobile /> },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="projects">
      <div className="container">
        {/* Hero Section */}
        <motion.section
          className="projects-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="projects-hero-content">
            <motion.h1
              className="projects-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My Projects
            </motion.h1>
            <motion.p
              className="projects-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A collection of projects showcasing my skills and passion for
              development
            </motion.p>
          </div>
        </motion.section>

        {/* Filter Section */}
        <motion.section
          className="filter-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="filter-buttons">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                className={`filter-btn ${
                  activeFilter === filter.id ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="filter-icon">{filter.icon}</span>
                <span className="filter-label">{filter.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section
          className="projects-grid-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="projects-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className={`project-card ${
                    project.featured ? "featured" : ""
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  layout
                >
                  <div className="project-image">
                    <div className="project-placeholder">
                      <span>{project.image}</span>
                    </div>
                    {project.featured && (
                      <div className="featured-badge">
                        <span>Featured</span>
                      </div>
                    )}
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github"
                      >
                        <FaGithub />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h2>Interested in working together?</h2>
            <p>Let's discuss your next project and bring your ideas to life.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a
                href="https://github.com/puzpuzpugazh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FaGithub />
                View More on GitHub
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Projects;
