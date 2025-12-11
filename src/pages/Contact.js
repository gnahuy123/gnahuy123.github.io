import React, { useState } from 'react';
import './Page.css';
import './Contact.css';
import resume from '../assets/files/Yu_Hang_Resume.pdf';
import personData from '../data/personData.js';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Clean email from mailto: prefix if exists in data
        const emailAddress = personData.email.replace('mailto:', '');

        const subject = encodeURIComponent(formData.subject || `Contact from ${formData.name}`);
        const body = encodeURIComponent(
            `Hi Yu Hang,\n\n${formData.message}\n\nBest regards,\n${formData.name}`
        );

        window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    };

    return (
        <div className="page">
            <header className="page-header">
                <h1>Contact Me</h1>
            </header>

            <div className="contact-container">
                {/* Left Column: Social Links */}
                <div className="social-section">
                    <p style={{ marginBottom: '1.5rem' }}>
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="social-links">
                        <a href={personData.email} className="social-btn">
                            <span className="social-icon">📧</span>
                            <span className="label">Email Me</span>
                        </a>
                        <a href={personData.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                            <span className="social-icon">👔</span>
                            <span className="label">LinkedIn</span>
                        </a>
                        <a href={personData.github} target="_blank" rel="noopener noreferrer" className="social-btn">
                            <span className="social-icon">🐙</span>
                            <span className="label">GitHub</span>
                        </a>
                    </div>

                    <a href={resume} download="Tan_Yu_Hang_Resume.pdf" className="download-resume">
                        📄 Download My Resume
                    </a>
                </div>

                {/* Right Column: Contact Form */}
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="form-input"
                                placeholder="Collaboration / Hello"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            Send Message 🚀
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
