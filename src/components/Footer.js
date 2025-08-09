import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/puzpuzpugazh',
      name: 'GitHub',
      color: '#333'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/pugazhenthi-k-965127247/',
      name: 'LinkedIn',
      color: '#0077b5'
    },
    {
      icon: <FaTwitter />,
      url: 'https://x.com/puzpuzpugazh',
      name: 'Twitter',
      color: '#1da1f2'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:pugazhenthi.kamalakkannan@gmail.com',
      name: 'Email',
      color: '#ea4335'
    }
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="footer-logo">
              <span className="brand-text">Portfolio</span>
            </Link>
            <p className="footer-description">
              Full Stack Developer passionate about creating beautiful, functional, 
              and user-centered digital experiences.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Quick Links</h3>
            <ul className="links-list">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={link.path}>{link.label}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Get In Touch</h3>
            <div className="contact-info">
              <p>
                <strong>Email:</strong>
                <a href="mailto:pugazhenthi.kamalakkannan@gmail.com">pugazhenthi.kamalakkannan@gmail.com</a>
              </p>
              <p>
                <strong>Location:</strong>
                <span>Chennai, IN</span>
              </p>
              <p>
                <strong>Available:</strong>
                <span>For new opportunities</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Pugazhenthi K. All rights reserved.
            </p>
            <p className="made-with">
              Made with <FaHeart className="heart-icon" /> using React
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 