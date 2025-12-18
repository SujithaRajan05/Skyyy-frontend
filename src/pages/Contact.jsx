import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'you@example.com',
    subject: 'How can we help?',
    message: 'Write your message here...'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-container">
      <Navbar />
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p className="contact-subtitle">
          Have a question or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <h3>Email Us</h3>
            <a href="mailto:support@skyrecharge.in" className="info-link">
              support@skyrecharge.in
            </a>
            <p className="info-note">We reply within 24 hours</p>
          </div>

          <div className="info-card">
            <h3>Call Us</h3>
            <a href="tel:+911800XXXXXXX" className="info-link">
              +91 1800-XXXX-XXXX
            </a>
            <p className="info-note">Mon-Sat, 9am-6pm IST</p>
          </div>

          <div className="info-card">
            <h3>Visit Us</h3>
            <p className="info-address">Mumbai, India</p>
            <p className="info-note">Our headquarters</p>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Subject (Optional)</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                rows="5"
              />
            </div>

            <div className="divider"></div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;