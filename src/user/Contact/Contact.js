import React, { useState } from 'react';
import axios from 'axios';
import '../Contact/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/contact`, formData);
      
      if (response.data.success) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p className="contact-subtext">Have a question or want to work together? I'd love to hear from you!</p>

      <div className="contact-grid">
        <div className="contact-form-section">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Reach Out Directly</h3>
          <p>📧 <strong>Email:</strong> vanshjainprof@gmail.com</p>
          <p>📍 <strong>Location:</strong> India</p>
          
          <div className="social-links">
            <h3>Follow My Work</h3>
            <a href="https://github.com/vanshjain137" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/vansh-jain-b955a23a1" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;