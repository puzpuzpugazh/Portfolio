import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'pugazhenthi.kamalakkannan@gmail.com',
      link: 'mailto:pugazhenthi.kamalakkannan@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+918610288572',
      link: 'tel:+918610288572'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Chennai, IN',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/puzpuzpugazh',
      color: '#333'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pugazhenthi-k-965127247/',
      color: '#0077b5'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://x.com/puzpuzpugazh',
      color: '#1da1f2'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Option 1: Formspree (Recommended for simplicity)
      const response = await fetch('https://formspree.io/f/meozlplk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }

      // Option 2: EmailJS (Alternative - uncomment and configure if preferred)
      /*
      import emailjs from '@emailjs/browser';
      
      const templateParams = {
        to_email: 'pugazhenthi.kamalakkannan@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      };

      const response = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
      */

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="contact">
      <div className="container">
        {/* Hero Section */}
        <motion.section 
          className="contact-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-hero-content">
            <motion.h1 
              className="contact-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              className="contact-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let's discuss your next project and bring your ideas to life
            </motion.p>
          </div>
        </motion.section>

        {/* Contact Content */}
        <motion.section 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-section"
              variants={itemVariants}
            >
              <div className="form-header">
                <h2>Send Me a Message</h2>
                <p>I'll get back to you as soon as possible</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Pugazhenthi K"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="pugazhenthi.kamalakkannan@gmail.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {submitStatus && (
                  <motion.div
                    className={`submit-status ${submitStatus}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitStatus === 'success' ? (
                      <p style={{color:'black'}}>✅ Message sent successfully! I'll get back to you soon.</p>
                    ) : (
                      <p style={{color:'black'}}>❌ Something went wrong. Please try again.</p>
                    )}
                  </motion.div>
                )}

                {/* Toast auto-dismiss logic */}
                {submitStatus && (() => {
                  setTimeout(() => {
                    if (typeof setSubmitStatus === 'function') setSubmitStatus(null);
                  }, 3000);
                  return null;
                })()}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="contact-info-section"
              variants={itemVariants}
            >
              <div className="info-header">
                <h2>Contact Information</h2>
                <p>Feel free to reach out through any of these channels</p>
              </div>

              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-info-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="info-icon">
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} target={info.link.startsWith('mailto:') || info.link.startsWith('tel:') ? '_self' : '_blank'} rel="noopener noreferrer">
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-links-section">
                <h3>Follow Me</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's work together to create something amazing</p>
            <div className="cta-buttons">
              <a href="mailto:pugazhenthi.kamalakkannan@gmail.com" className="btn btn-primary">
                <FaEnvelope />
                Send Email
              </a>
              <a href={require('../assets/PUGAZHENTHI K Resume .pdf')} className="btn btn-primary" download>
                Download Resume
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact; 