import React from 'react';
import './Page.css';
import './Contact.css';
import personData from '../data/personData.js';
import { EmailIcon, LinkedInIcon, GitHubIcon } from '../components/Icons';

const Contact = () => {
    return (
        <div className="page contact-page">
            <header className="page-header">
                <h1>Get in Touch</h1>
            </header>

            <p className="contact-intro">
                Open to new opportunities and collaborations.
            </p>

            <div className="contact-links">
                <a href={personData.email} className="contact-link">
                    <EmailIcon width="32" height="32" />
                    <span>Email</span>
                </a>

                <a href={personData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                    <LinkedInIcon width="32" height="32" />
                    <span>LinkedIn</span>
                </a>

                <a href={personData.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                    <GitHubIcon width="32" height="32" />
                    <span>GitHub</span>
                </a>

            </div>
        </div>
    );
};

export default Contact;

