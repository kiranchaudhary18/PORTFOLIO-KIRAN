import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import "./portfolio.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus(null);
    }, 5000);
  };

  return (
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
      </div>

      <div className="contact-grid">
        <div>
          <h3 className="contact-title">Contact Information</h3>
          <p className="contact-text">
            I'm currently available for freelance work and full-time positions. If you have a project that needs some creative touch, I'd love to hear about it!
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <Mail size={20} />
              <div>
                <p>Email</p>
                <a href="mailto:kiran.chaudhary.cg@gmail.com">kiran.chaudhary.cg@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <Linkedin size={20} />
              <div>
                <p>LinkedIn</p>
                <a href="https://www.linkedin.com/in/chaudharykiran16/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/chaudharykiran16/</a>
              </div>
            </div>
            <div className="contact-item">
              <Github size={20} />
              <div>
                <p>GitHub</p>
                <a href="https://github.com/kiranchaudhary18" target="_blank" rel="noopener noreferrer">https://github.com/kiranchaudhary18</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="contact-title">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Your message"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="b-submit">
              {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent!' : submitStatus === 'error' ? 'Error' : <><Send size={16} /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;